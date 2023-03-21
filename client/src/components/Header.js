import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CourseSearch from './CourseSearch'
import {LinkContainer} from 'react-router-bootstrap'
import Image from 'react-bootstrap/Image'
import { IoSearchOutline } from 'react-icons/io'

export default function Header() {
  return (
    <div>
        <Navbar style={{ 'backgroundColor': '#0c3954' }} expand="sm">
             <Container align = 'left'>
             <Navbar.Brand href="/"><Image src="/learnow.png" width="200px"/></Navbar.Brand>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             </Container>
             <Container align='middle'>
                <LinkContainer style={{'color': '#cecece'}} to="/createcourse"><Nav.Link>CREATE COURSE</Nav.Link></LinkContainer>
                <LinkContainer style={{'color': '#cecece'}} to="/courses/:id"><Nav.Link>CATEGORY</Nav.Link></LinkContainer>
                <LinkContainer style={{'color': '#cecece'}} to="/login"><Nav.Link>LOGIN</Nav.Link></LinkContainer>
                <LinkContainer style={{'color': '#cecece'}} to="/signup"><Nav.Link>SIGNUP</Nav.Link></LinkContainer>
                <LinkContainer style={{'color': '#cecece'}} to='/dashboard'><Nav.Link>MY DASHBOARD</Nav.Link></LinkContainer>'
            </Container>
        </Navbar>
    </div>
  )
}
