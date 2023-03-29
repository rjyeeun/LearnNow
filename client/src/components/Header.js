import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CourseSearch from './CourseSearch'
import {LinkContainer} from 'react-router-bootstrap'
import Image from 'react-bootstrap/Image'
import { NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header({currentUser, changeSearch, searchCourse, courses, fetchCoursesByCategory}) {
    const [showMenu, setShowMenu] = useState(false)
    const [categories, setCategories] = useState([])

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      }


    async function handleLogout() {
        await fetch("/logout", {
            method: "DELETE",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => alert("You've been successfully logged out"))
        
        window.location.reload()
        return false
    }

    useEffect(() => {
        // Group the courses by category and store the unique categories in the categories state
        const uniqueCategories = [...new Set(courses.map(course => course.category))];
        setCategories(uniqueCategories);
      }, [courses]);

    const login_option = <LinkContainer style={{'color': '#cecece'}} to="/login"><Nav.Link>LOGIN</Nav.Link></LinkContainer>
    const signup_option =  <LinkContainer style={{'color': '#cecece'}} to="/signup"><Nav.Link>SIGNUP</Nav.Link></LinkContainer>
    const dashboard_option =  <LinkContainer style={{'color': '#cecece'}} to='/dashboard'><Nav.Link>MY DASHBOARD</Nav.Link></LinkContainer>
    const logout_option = <LinkContainer style={{'color': '#cecece'}} to="/login" onClick={handleLogout}><Nav.Link>LOGOUT</Nav.Link></LinkContainer>
    const createcourse_option = <LinkContainer style={{'color': '#cecece'}} to="/newcourse"><Nav.Link>CREATE COURSE</Nav.Link></LinkContainer>

  return (
    <div>
        <Navbar style={{ 'backgroundColor': '#0c3954', fontFamily: 'DMSans', height: '130px'}} expand="sm">
             <NavbarBrand href='/'><Image src="/learnow.png" width="110%" style={{ marginBottom: '18px'}}/></NavbarBrand>
             <CourseSearch changeSearch={changeSearch}
                searchCourse={searchCourse} />
             <Container align='right' style={{marginRight: '40px'}}>
             <NavDropdown title="CATEGORIES" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} show={showMenu} style={{'color': '#cecece'}} id="basic-nav-dropdown">
             {categories.map(category => (
            <NavDropdown.Item key={category} onClick={() => fetchCoursesByCategory(category)}>{category}</NavDropdown.Item>
          ))}
        </NavDropdown>
                        {currentUser.username ? createcourse_option : null}
                        {currentUser.username ?  dashboard_option : login_option}
                        {currentUser.username ? null : signup_option}
                        {currentUser.username ? logout_option : null}
            </Container>
        </Navbar>
    </div>
  )
}