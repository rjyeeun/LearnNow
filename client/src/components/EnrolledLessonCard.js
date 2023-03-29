import React from 'react'
import ReactPlayer from 'react-player'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import {BiTime} from 'react-icons/bi'

export default function EnrolledLessonCard({lesson, index}) {
  const {title, content, description, duration} = lesson
  return (
  <div className="enrolledLesson">
    <Accordion flush>
      <Accordion.Item >
        <Accordion.Header style={{fontSize: '1.5em'}}>Lesson {index}. {title}</Accordion.Header>
        <Accordion.Body><BiTime/>{duration}min</Accordion.Body>
        <Accordion.Body align='center'>
          <ReactPlayer url={content}></ReactPlayer>
        </Accordion.Body>
        <Accordion.Body align='center'  style={{fontSize: '1.1em', borderRadius: '1em'}}>
          <span style={{backgroundColor: '#efefef'}} >
          {description}
          </span>
        </Accordion.Body>
        <br />
      </Accordion.Item>
    </Accordion>
  </div>
  )
}
