import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ update }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //states to hold input datas
  const [inputs, setInputs] = useState(
    {
      id: "",
      caption: "",
      cover_image: "",
      video_url: ""
    })


  // function for onchange
  const setValues = (e) => {
    //value
    // console.log(e.target.value);
    //  let value=e.target.value
    //  let name=e.target.name
    let { value, name } = e.target
    //  console.log(e.target.name);
    setInputs({ ...inputs, [name]: value })

  }
  //function to extract video url
  const extractUrl = (e) => {
    let videourl = e.target.value
    // console.log(videourl);
    if (videourl.includes("v=")) {
      let subUrl = videourl.split("v=")[1]
      // console.log(subUrl);
      let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
      setInputs({ ...inputs, ["video_url"]: finalUrl })

    }
  }
  //function to add button click
  const addHandle = async () => {
    let id = uniqid()
    // console.log(id);
    setInputs({ ...inputs, ["id"]: id })

    const { caption, cover_image, video_url } = inputs
    if (caption == "" || cover_image == "" || video_url == "") {
      toast.error("All Inputs Are Required", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      const result = await addVideo(inputs)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        //update state of home
        update(result.data)

        toast.success("video added", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setShow(false);
      }
    }
    // alert('button clicked')
  }


  console.log(inputs);


  return (
    <div className='p-5'>
      <i onClick={handleShow} class="fa-solid fa-file-arrow-up fa-flip fa-2xl " style={{ color: "orange" }}></i>



      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body className='bg-black border'>
          <Modal.Title><h3 className='text-white'> upload video</h3> <br /></Modal.Title> <br />

          <FloatingLabel controlId="floatingInput" label="video caption" className="mb-3">
            <Form.Control name="caption" onChange={(e) => setValues(e)} type="" /> <br />
          </FloatingLabel>

          <FloatingLabel controlId="" label="cover image url">
            <Form.Control name='cover_image' onChange={(e) => setValues(e)} type="" /> <br />
          </FloatingLabel>

          <FloatingLabel controlId="" label="Youtube video url">
            <Form.Control onChange={(e) => extractUrl(e)} type="" placeholder="" /> <br />
          </FloatingLabel>




        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  )
}

export default Add