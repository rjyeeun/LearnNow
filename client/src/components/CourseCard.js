import React, { useState, useEffect } from 'react';
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import { FaStar } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function CourseCard({course}) {
    const {id, title, description, difficulty, price, thumbnail_img, lessons, reviews, user_liked_courses} = course

    //get total number of likes 
    let like_count = course.user_liked_courses.map ((like) => like)
    const like_count_total = like_count.length

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
    <Card align='center' style={{ width: '18rem'}}>
        <Card.Img variant="top" src={thumbnail_img}/>
        <Card.Body style={{ backgroundColor: "#9ccbd8"}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{difficulty}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <p><AiOutlineLike/>{like_count_total} <MdOutlineRateReview/>{review_count_total}</p>
        <p>Rating: {stars}</p>
        <Link to={`/courses/${id}`}><Button>View Details</Button></Link>
        </Card.Body>
    </Card>
  )
}
