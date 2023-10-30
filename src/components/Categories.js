import React, { useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allApis';
import { Trash2 } from 'react-feather';


function Categories() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // state to hold input ,id and video array
  const [catInputs, setCatInputs] = useState({

    id: "",
    name: "",
    videos: []


  })

  const [Categories, setCategories] = useState([])



  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }

  const addData = async () => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })

    const { name } = catInputs
    if (name == "") {
      toast.error("provide caption", {
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
      //api call
      const result = await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        // console.log(result.data.name);
        getAllCategory()
        toast.success(`${result.data.name} added`, {
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
    }
  }
  // console.log(catInputs);
  const getAllCategory = async () => {
    const result = await getAllCat()

    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);

    }

  }
  // console.log(Categories);
  const removeCategory = async (id) => {
    const result = await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {
      // refresh category list
      getAllCategory()
    }

  }

  useEffect(() => {
    getAllCategory()
  }, [])


  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragged over the category");
  }

  const dropped = async (e, id) => {
    console.log("dropped....cat id " + id);

    //video id access
    const videoId = e.dataTransfer.getData("cardId")
    console.log(videoId);
    
    //access video data from backend
    const { data } = await getVideo(videoId)
    console.log(data);

    //select dropped category from all categories
    const selectedCategory = Categories.find(i => i.id == id)
    console.log(selectedCategory);

    //update category object withvideo data
    selectedCategory.videos.push(data)
    console.log(selectedCategory);

    //api call to update the changed category in backend
    await updateCategory(id, selectedCategory)
    getAllCategory()
  }
  return (
    <div>
      <Button variant="primary" className='border-black w-100' onClick={handleShow} > Add Categories</Button>
      {
        Categories.length > 0 ? (

          Categories.map(i => (
            <div droppable
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => dropped(e, i?.id)}
              className='border mt-3 p-3 fs-4'>

                <p> {i.name}</p>

              <div className='text-end '>
                <Trash2 onClick={() => { removeCategory(i.id) }} size={80} className='text-danger btn'></Trash2>
              </div>
              {
                i.videos.map(j => (
                  <img style={{ height: '100px', width: '100px' }} src={j.cover_image} alt="" />
                ))
              }
            </div>
          ))
        ) : <h1>No categories added yet</h1>
      }

      <Modal show={show} onHide={handleClose} >
        <Modal.Body className='bg-primary border'>
          <FloatingLabel controlId="" label="add category">
            <Form.Control onChange={(e) => setInputs(e)} name="name" type="" placeholder="" /> <br />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className='bg-info border' >
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />

    </div>
  )
}

export default Categories