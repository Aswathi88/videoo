import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllvideos } from '../services/allApis'
import { Col,Row } from 'react-bootstrap'


function View({updatedState}) {


const [allvideos,setAllvideos]=useState([])

// state to update delete
const [deleteUpdate,setDeleteUpdate]=useState({})

  const accessVideos=async()=>{
 const result=  await getAllvideos()
 if(result.status>=200 && result.status<300){
 setAllvideos(result.data);
 }
  }

  console.log(allvideos);

  useEffect(()=>{

       accessVideos()

  },[updatedState,deleteUpdate])

  return (
    <Row>
      {
        allvideos.length>0?(
          allvideos.map(i=>
           <Col lg={6} md={6}> < Videocard videos={i} deleteFun={setDeleteUpdate}></Videocard></Col>

          )

        ): <h1>No Videos In Your Collection</h1>
      }
 </Row>
  )
}

export default View