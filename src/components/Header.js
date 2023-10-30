import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-primary ">
        <Container>
          <Link to={'/'} style={{ textDecoration: "none" }}>
            <Navbar.Brand  >
              <img
                alt=""
                src="https://i.postimg.cc/PxvtcdKv/pinky.jpg"
                width="30"
                height="30"
                style={{borderRadius:"10px"}}
                className="d-inline-block align-top "

              />{' '}
            <span className='text-light'>  VIDEO UPLOADER</span>
           {/* <span >V</span>ideo <span >U</span>ploader */}
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header