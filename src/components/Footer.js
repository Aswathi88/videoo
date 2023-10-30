import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='bg-primary' >
   <Row >
    <Col>
    <img
                alt=""
                src="https://i.postimg.cc/PxvtcdKv/pinky.jpg"
                width="30"
                height="30"
                style={{borderRadius:"10px"}}
                className="d-inline-block align-top"

              />{' '}
          
                     <span className='text-danger '>V</span>ideo <span className='text-danger'>U</span>ploader 
   <h5 className='mt-2 p-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. !

   </h5>
    </Col>
    <Col>
    <h4>Link</h4>
  <Link to={'/'} style={{textDecoration:"none"}}>
    <a className='fs-5' style={{textDecoration:'none',color:'orange'}}>Landing</a><br />
    </Link>
    <Link to={"/home"} style={{textDecoration:"none"}}>
    <a className='fs-5' style={{textDecoration:'none',color:'orange'}}>Home</a><br />
    </Link>
    <Link to={"/watch-history"} style={{textDecoration:"none"}}>
    <a className='fs-5' style={{textDecoration:'none',color:'orange'}}>Watch History</a><br />
    </Link>
    </Col>
    <Col >
     <h5>Guide</h5>
     <h5>react</h5>
     <h5>react bootstrap</h5>
     <h5>routing</h5>

    </Col>
    <Col>
    <h4 className='text-danger'>Contact Us</h4>
    <input type="text" className='form-control w-75' placeholder='enter email'/>
    <Button className='mt-4 w-75' variant="danger">send</Button>{' '} <br />
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-github"></i>
    </Col>

   </Row>
      </div>
  )
}

export default Footer