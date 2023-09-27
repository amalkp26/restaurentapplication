import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'./header.css'


function Header() {
  return (
    <div>
            <Navbar bg='dark' variant='black' >
        <Container>
          <Navbar.Brand href="#home">
            <img id='d1' style={{
              height:'50px',
              width:'50px',
              borderRadius:'40px'
            }}
              alt=""
              src="https://i.postimg.cc/52w9CpRf/logo-templates-monogrammed-elements-flourish-600w-1900512124.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <strong className='fs-3 ms-3 text-white'> find best </strong>  
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
