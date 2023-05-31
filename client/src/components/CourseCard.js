import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';
import {BiTime} from 'react-icons/bi'
import imagePlaceholder from './imagePlaceholder.png'

export default function CourseCard({course}) {
    const {id, title, difficulty, price, thumbnail_img } = course

    const [totalDuration, setTotalDuration] = useState(0);

    const default_thumbnail_img = {imagePlaceholder}

    function sumLessonDuration(lessons) {
        let totalDuration = 0;
        lessons.forEach((lesson) => {
          totalDuration += lesson.duration;
        });
        return totalDuration;
      } 
    useEffect(() => {
      if (course && course.lessons) {
        const duration = sumLessonDuration(course.lessons);
        setTotalDuration(duration);
      }
    }, [course]);

    const [courseCreator, setCourseCreator] = useState('');
    //getting instructor name for the course
    useEffect(() => {
        fetch(`/api/users/${course.instructor_id}`)
        .then(r => r.json())
        .then(data => setCourseCreator(data.name))
    }, [])
    //get total number of reviews
    let review_count = course.reviews.map((review) => review)
    const review_count_total = review_count.length

    //get average review rating associated with a course
    const sum = course.reviews.reduce((total, review) => total + review.rating, 0);
    const average = sum / course.reviews.length;
    const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar key={i} color={i < average ? '#ffc107' : '#e4e5e9'} />
            );
        }

return (
<>
<Link style={{textDecoration: 'none', color: 'black'}} to={`/courses/${id}`}>
<CardGroup className="d-flex justify-content-center">
    <Card className="courseCard" align='center' style={{maxWidth: '23em', maxHeight: '30em', border: ' 2px solid #0c3954', }}>
        <Card.Img variant="top" src={thumbnail_img || default_thumbnail_img} style={{ height: "150px" }}/>
        <Card.Body style={{ backgroundColor: "#ffffff"}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Instructor: {courseCreator}</Card.Text>
            <Card.Text>{difficulty} Level </Card.Text>
            <p>{stars} ({review_count_total}) | <BiTime/>{totalDuration} </p>
            <Card.Title size= 'large' align='right'>${price}</Card.Title>
        </Card.Body>
    </Card>
</CardGroup>
<br/> 
</Link>
</>
  )
}
