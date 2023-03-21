import React, { useState, useEffect } from 'react';
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import Card from 'react-bootstrap/Card';


export default function CourseCard({course, currentCourse, setCurrentCourse}) {
    const {title, description, difficulty, price, reviews, user_liked_courses} = course
    
    let like_count = course.user_liked_courses.map ((like) => like)
    const like_count_total = like_count.length

    let review_count = course.reviews.map((review) => review)
    const review_count_total = review_count.length

    const handleClick = (e) => {
        setCurrentCourse({...course, [e.target.name]: e.target.value })
    }

return (
    <Card onClick={handleClick} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="imagePlaceholder.png"/>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{difficulty}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <p><AiOutlineLike/>{like_count_total} <MdOutlineRateReview/>{review_count_total}</p>
        </Card.Body>
    </Card>
  )
}
