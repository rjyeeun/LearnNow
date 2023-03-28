import React from 'react'
import {Button , Card, Form} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {BiTime} from 'react-icons/bi'
import EnrolledCourseLists from './EnrolledCourseCard';

export default function LessonList({lesson, index}) {
  const {title, description, duration} = lesson
  

 
  return (
    <>
    <Card style={{backgroundColor: '#f6f6f6'}}>
      <Card.Title>Lesson {index}. {title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text><BiTime/>{duration}mins</Card.Text>
    </Card>
    <br/>
    </>
  )
}
