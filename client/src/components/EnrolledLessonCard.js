import React from 'react'
import ReactPlayer from 'react-player'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import {BiTime} from 'react-icons/bi'

export default function EnrolledLessonCard({lesson, index}) {
  const {title, content, description, duration} = lesson
  return (
    <Accordion flush>
      <Accordion.Item >
        <Accordion.Header >Lesson {index}. {title}</Accordion.Header>
        <Accordion.Body><BiTime/>{duration}min</Accordion.Body>
        <Accordion.Body align='center'>
          <ReactPlayer url={content}></ReactPlayer>
        </Accordion.Body>
        <Accordion.Body align='center'>
          {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
