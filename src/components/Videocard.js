import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allApis';
import uniqid from 'uniqid';
import { format } from 'date-fns';

function Videocard({ videos, deleteFun }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    //body

    //id
    var id = uniqid

    //title
    var video_title = videos.caption

    //url
    var url = videos.video_url

    //date


    var date = format(new Date(), 'yyyy-MM-dd h:mm:ss a')

    // console.log(date);
    const body={id,video_title,url,date}
  if(body){
    // history api call
      const result= await addHistory(body)
      // console.log(result);

  }



  }

  const handleDelete = async (id) => {

    const result = await deleteVideo(id)
    // console.log(result);

    if (result.status >= 200 && result.status < 300) {
      deleteFun(result.data)

    }
  }
  const dragStart=(e,id)=>{
    console.log("drag started....source card id " + id);
    //store dragged data 
    e.dataTransfer.setData("cardId",id) 
  }

  return (


    <div>
      <Card draggable 
      onDragStart={(e)=>dragStart(e,videos.id)} style={{ width: '18rem', height: "350px" }} className='mb-5 ms-2'>
        <Card.Img onClick={handleShow} variant="top" src={videos.cover_image} />
        <Card.Body>
          <Card.Title >{videos.caption} </Card.Title>


          <div className='text-end'>
            <Trash2 onClick={() => handleDelete(videos.id)} size={75} className='text-danger btn'></Trash2>
            {/* <i class="fa-solid fa-trash-can fa-1x"></i> */}

          </div>


        </Card.Body>
      </Card>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videos.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="400" height="200" src={videos.video_url}
            title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Videocard