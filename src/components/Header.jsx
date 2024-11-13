import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar className="bg-info ">
        <Container>
          <Navbar.Brand  className=' fw-bolder fs-5'>
          <Link to={'/'} style={{textDecoration:'none'} }className="text-white">
                <i class="fa-solid fa-circle-play color"></i>{' '}
                Media Player
          </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
