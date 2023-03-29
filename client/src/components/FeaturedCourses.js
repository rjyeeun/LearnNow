import { Card, Carousel } from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


function FeaturedCourses() {

    const [featuredCourses, setFeaturedCourses] = useState([]);

    useEffect(() => {
        fetch('/featured_courses')
        .then(response => response.json())
        .then(data => setFeaturedCourses(data))
        .catch(error => console.error(error));
    }, []);
    return (
    <div>
        {featuredCourses.length > 0 &&  (
            <Card className="text-center" style={{ position: 'relative', top: '-15px', paddingRight:'2em', paddingLeft:'2em', paddingTop: '2em', paddingBottom: '2em', backgroundColor:'#e8e9e3' }} >
            <Carousel indicators slide={true} itemsToShow={2} itemsToScroll={2}>
                {featuredCourses.map(course => (
                <Carousel.Item key={course.id}>
                    <Card className='mx-auto' style={{backgroundColor:'#ffce4c', maxHeight: '28em', maxWidth: '60em', }}>
                    <br />
                    <Card.Title style={{fontFamily: 'poppinsBold'}}>Featured Courses</Card.Title>
                    <br />
                    <Link style={{textDecoration: 'none', color: 'black'}} to={`/courses/${course.id}`}>
                    <Card.Img className='mx-auto' style={{ maxWidth: "400px", maxHeight: "200px"}} variant="top" src={course.thumbnail_img} />
                    </Link>
                    <Card.Body>
                        <Card.Title style={{fontFamily: 'poppinsRegular'}}>{course.title}</Card.Title>
                        <small className="text-muted" style={{fontFamily:'poppinsRegular'}}>{course.difficulty}</small>
                        <br />
                        <Card.Text style={{fontFamily: 'poppinsRegular'}}>{course.description}</Card.Text>
                        <br />
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                ))}
            </Carousel>
            </Card>
        )}
    </div>
    )
}

export default FeaturedCourses