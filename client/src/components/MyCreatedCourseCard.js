import React from 'react'
import {Button , Card, Form} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom'
import MyCreatedLesson from './MyCreatedLesson';

function MyCreatedCourseCard({course, currentUser, myCourse}) {

   const {title, description, thumbnail_img, lessons} = course.course




  return (
    <div>
        <h1>
        {title}
        </h1>
        <p>
        {description}
        </p>
    </div>
    )
}

export default MyCreatedCourseCard