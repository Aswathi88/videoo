import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'


function Home() {

  //state for state lifting
  const [addUpdate, setAddupdate] = useState({})

  return (

    <div className='text-white'>
      <h2 className='p-5 ' style={{ fontStyle: "oblique" }}> <span className='text-primary '>S</span>tart <span className='text-primary'>U</span>ploading <span className='text-primary'>V</span>ideo
        <span className='text-primary'> F</span>or<span className='text-primary'> F</span>ree</h2>
      <hr />
      <div className='p-4 ' >
        <Row>
          <Col lg={8}>

            <Link to={'/watch-history'} style={{ textDecoration: "none" }}>
              <a style={{ textDecoration: 'none', fontFamily: 'monospace', color: "orange", fontSize: "30px" }}>
                <i class="fa-solid fa-clock fa-spin "></i>view watch history </a>
            </Link>

            <p style={{ fontStyle: "oblique" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos illo quibusdam iure ullam nemo amet, autem dolore asperiores id ad dicta consequatur alias animi est architecto quo.
              Ab, minus atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium eveniet nesciunt aliquid modi velit dolor
              voluptas porro quibusdam fuga molestiae culpa ipsum minus rerum, totam labore dolore enim! Laudantium.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime similique rerum aliquid odit officia ratione quae odio fugiat, rem labore quisquam nostrum, veniam fuga laboriosam nemo totam inventore voluptate.</p>
          </Col>
          <Col lg={3} >
            <img src="https://i.postimg.cc/FHTX4GFQ/purple.png" style={{ width: "200px", height: "200px" }} alt="" />

          </Col>
        </Row>
        <hr />
      </div>
      <Row>
        <Col lg={1}>
          <Add update={setAddupdate}></Add>
        </Col>
        <Col lg={7}>
          <View updatedState={addUpdate}></View>
        </Col>
        <Col lg={4}>
          <Categories></Categories>
        </Col>
      </Row>
    </div>
  )
}

export default Home