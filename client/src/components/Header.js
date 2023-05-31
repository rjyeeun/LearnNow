import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CourseSearch from './CourseSearch'
import {LinkContainer} from 'react-router-bootstrap'
import Image from 'react-bootstrap/Image'
import { NavbarBrand, NavDropdown } from 'react-bootstrap';

export default function Header({currentUser, changeSearch, searchCourse, courses, category, setCategory}) {
    async function handleLogout() {
        await fetch("/api/logout", {
            method: "DELETE",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => alert("You've been successfully logged out"))
        
        window.location.reload()
        return false
    }

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
             {/* <NavDropdown title="CATEGORIES" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} show={showMenu} style={{'color': '#cecece'}} id="basic-nav-dropdown"> */}
            
              <NavDropdown style={{color: '#cecece'}}title='CATEGORY' onSelect={e => setCategory(e)}> 
                <NavDropdown.Item eventKey="Arts and Design">Arts and Design</NavDropdown.Item>
                <NavDropdown.Item eventKey="Business and Entrepreneurship">Business and Entrepreneurship</NavDropdown.Item>
                <NavDropdown.Item eventKey="Education and Teaching">Education and Teaching</NavDropdown.Item>
                <NavDropdown.Item eventKey="Environmental Sustainability">Environmental Sustainability</NavDropdown.Item>
                <NavDropdown.Item eventKey="Health and Wellness">Health and Wellness</NavDropdown.Item>
                <NavDropdown.Item eventKey="Language">Language</NavDropdown.Item>
                <NavDropdown.Item eventKey="Personal development and growth">Personal development and growth</NavDropdown.Item>
                <NavDropdown.Item eventKey="Science and Math">Science and Math</NavDropdown.Item>
                <NavDropdown.Item eventKey="Social Sciences and Humanities">Social Sciences and Humanities</NavDropdown.Item>
                <NavDropdown.Item eventKey="Technology and IT">Technology and IT</NavDropdown.Item>
              </NavDropdown>
            {/* <NavDropdown.Item key={category} onClick={() => fetchCoursesByCategory(category)}>{category}</NavDropdown.Item> */}
       
        {/* </NavDropdown> */}
                        {currentUser.username ? createcourse_option : null}
                        {currentUser.username ?  dashboard_option : login_option}
                        {currentUser.username ? null : signup_option}
                        {currentUser.username ? logout_option : null}
            </Container>
        </Navbar>
    </div>
  )
}
