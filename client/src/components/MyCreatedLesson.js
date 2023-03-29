import React,{ useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import {Button , Card, Form} from 'react-bootstrap';
import {AiOutlineFileAdd} from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion';
import {BiTime} from 'react-icons/bi'
import EditLessonForm from './EditLessonForm';
import NewLessonForm from './NewLessonForm';
import { useNavigate } from 'react-router-dom';
import {TbEdit} from 'react-icons/tb'
import {RiDeleteBin5Line} from 'react-icons/ri';

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

    const editLessonButton = <Button onClick = {handleEditLesson} variant="secondary" style={{border: 'none', fontFamily: 'poppinsMedium'}}> <TbEdit/> Edit Lesson </Button>
    const addLessonButton = <Button style={{ position:'center', backgroundColor: '#195946', border: 'none', fontFamily: 'poppinsMedium'  }} onClick = {handleLessonButton} variant="secondary"> <AiOutlineFileAdd></AiOutlineFileAdd> Add a Lesson </Button>
    const deleteLessonButton = <Button style={{backgroundColor: '#f44336', border: 'none', fontFamily: 'poppinsMedium'}}onClick={handleDelete}> <RiDeleteBin5Line/> Delete</Button>


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
                <div>
                {editLessonButton}  {addLessonButton} {deleteLessonButton}
                </div>
                {editLessonForm ? <EditLessonForm lesson={lesson} onEditLesson={onEditLesson}/> : ''}
                <br />
                {viewLessonForm ? <NewLessonForm/> : ''}
        </>
  )
}

export default MyCreatedLesson