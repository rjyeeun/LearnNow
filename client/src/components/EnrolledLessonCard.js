import React from 'react'
import ReactPlayer from 'react-player'
import ListGroup from 'react-bootstrap/ListGroup';
import {BiTime} from 'react-icons/bi'

export default function EnrolledLessonCard({lesson}) {
  const {title, content, description, duration} = lesson
  return (
    <div>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>{title}</ListGroup.Item>
      <ListGroup.Item>
        <ReactPlayer url={content}/>
      </ListGroup.Item>
      <ListGroup.Item>{description}</ListGroup.Item>
      <ListGroup.Item><BiTime/>{duration}mins</ListGroup.Item>
    </ListGroup>
    </div>
  )
}
