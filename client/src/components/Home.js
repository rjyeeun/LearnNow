import React, {useState, useEffect} from 'react'
import CourseCard from './CourseCard'
import { Card, Col, Row, Carousel } from 'react-bootstrap';

export default function Home({ courses }) {

const [featuredCourses, setFeaturedCourses] = useState([]);
 
useEffect(() => {
    fetch('/featured_courses')
      .then(response => response.json())
      .then(data => setFeaturedCourses(data))
      .catch(error => console.error(error));
  }, []);

  const courseArray = courses.map(course => <CourseCard key={course.id} course={course}/>)

  return (
    <div>
      {featuredCourses.length > 0 && (
        <div className="my-5">
        <Card className="text-center">
          <Carousel indicators slide={true} itemsToShow={2} itemsToScroll={2}>
            {featuredCourses.map(course => (
              <Carousel.Item key={course.id}>
                <Card style={{ backgroundColor: "#ffce4c"}}>
                  <br />
                  <Card.Title style={{fontFamily: 'poppinsBold'}}>Featured Courses</Card.Title>
                  <br />
                  <Card.Img className='mx-auto' style={{ maxWidth: "400px", maxHeight: "200px"}} variant="top" src={course.thumbnail_img} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <small className="text-muted">{course.difficulty}</small>
                    <Card.Text>{course.description}</Card.Text>
                    <br />
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
          </Card>
        </div>
      )}
      <Row className="row-cols-4 g-5">
        {courseArray}
      </Row>
    </div>
  );
}