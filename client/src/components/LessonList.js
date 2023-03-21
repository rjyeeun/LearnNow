import React from 'react'
import {Button , Card, Form} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {BiTime} from 'react-icons/bi'

export default function LessonList({lesson}) {
  const {title, description, duration} = lesson
  return (
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{title}</ListGroup.Item>
      <ListGroup.Item>{description}</ListGroup.Item>
      <ListGroup.Item><BiTime/>{duration}mins</ListGroup.Item>
    </ListGroup>
  )
}
