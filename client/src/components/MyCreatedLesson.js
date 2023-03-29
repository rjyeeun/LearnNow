import React,{ useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import {Button , Card, Form} from 'react-bootstrap';
import {AiOutlineFileAdd} from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion';
import {BiTime} from 'react-icons/bi'
import EditLessonForm from './EditLessonForm';
import NewLessonForm from './NewLessonForm';
import { useNavigate } from 'react-router-dom';

function MyCreatedLesson({lesson, index, onEditLesson, onDeleteLesson}) {
    const [editLessonForm, setEditLessonForm] = useState(false)
    const [viewLessonForm, setViewLessonForm] = useState(false)
    const {id, course_id, title, content, description, duration} = lesson
    const navigate = useNavigate()

    const handleEditLesson = () => {
        setEditLessonForm(prev => !prev)
    }
    const handleLessonButton = () => {
        setViewLessonForm(prev => !prev)
    }

    const handleDelete = () => {
        fetch(`/courses/${course_id}/lessons/${id}`, { method: 'DELETE' })
        .then(() => onDeleteLesson(id))
        .then(alert('lessons deleted successfully'))
        window.location.reload()

    }

    const editLessonButton = <Button onClick = {handleEditLesson} variant="secondary"> Edit Lesson </Button>
    const addLessonButton = <Button style={{ position:'center'  }} onClick = {handleLessonButton} variant="secondary"> <AiOutlineFileAdd></AiOutlineFileAdd> Add a Lesson </Button>
    const deleteLessonButton = <Button onClick={handleDelete}>Delete</Button>


  return (
        <>
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
                {editLessonButton}  {addLessonButton} {deleteLessonButton} 
                <br/> <br/> 
                {editLessonForm ? <EditLessonForm lesson={lesson} onEditLesson={onEditLesson}/> : ''}
                <br />
                {viewLessonForm ? <NewLessonForm/> : ''}
        </>
  )
}

export default MyCreatedLesson