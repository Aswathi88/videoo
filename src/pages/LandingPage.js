import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='text-white'>
      <Row className=''>
        <Col lg={9}>
          <h1 className='text-center'>
            <span className='text-primary'>V</span>ideo  <span className='text-primary'>U</span>ploader
          </h1>
          <p className='fs-5 text-startswith p-4' style={{ fontStyle: "oblique" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sed suscipit eos laudantium fuga? Ipsam repellendus minima, natus, doloribus aspernatur ad minus tempora consectetur nostrum adipisci, voluptas impedit molestias fuga!</p>
          <Link to={'/home'}>
            <Button variant="primary" className='border-black w-25 ms-5' >Get Started</Button>
            <hr />
          </Link>
        </Col>
        <Col lg={3}>
        </Col>


      </Row>
      <Row>
        <Col><h1 className='text-secondary text-center'> <span className='text-primary'>  F</span>eatures</h1>


        </Col>

      </Row>
      < Container>
        <Row className='mb-5   mt-2'>
          <Col lg={4} md={2} sm={1}>
            <Card style={{ width: '18rem', height: '200px' }} className='mt-5'>
              <Card.Img variant="top" src="https://i.postimg.cc/504Tk1fk/Isopoly-05.gif" />
           
            </Card>
          </Col>
          <Col lg={4} md={2} sm={1}>
            <Card style={{ width: '18rem', height: '200px' }}className='mt-5'>
              <Card.Img variant="top" src="https://i.postimg.cc/PqDvFpt2/ball.gif" />
           
            </Card>
          </Col>
          <Col lg={4} md={2} sm={1}>
            <Card style={{ width: '18rem', height: '200px' }}className='mt-5'>
              <Card.Img variant="top" src="  https://i.postimg.cc/jqmKCwxx/NiDF.gif" />


            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage