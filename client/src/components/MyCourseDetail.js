import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button , Card } from 'react-bootstrap';
import MyCreatedLesson from './MyCreatedLesson';
import {AiOutlineFileAdd} from 'react-icons/ai'
import NewLessonForm from './NewLessonForm';

function MyCourseDetail() {
    const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
    const [errors, setErrors] = useState(false)
    const [lessonLists, setLessonLists] = useState([])
    const [currentLesson, setCurrentLesson] = useState([])
    const [viewLessonForm, setViewLessonForm] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/courses/${id}`)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                setCourse(data);
                });
            } else {
                res.json().then(data => setErrors(data.error));
            }
        });
    }, [id]);

    const {lessons, title, description, reviews, instructor_id} = course

    const handleLessonButton = () => {
        setViewLessonForm(prev => !prev)
    }

    useEffect( () => {
        fetch(`/api/courses/${id}/lessons`)
        .then (res => {
            if (res.ok) {
                res.json().then(data => {
                setLessonLists(data);
                });
            } else {
                res.json().then(data => setErrors(data.error));
            }
        });
    }, [id]);

    const addLessonButton = <Button style={{ position:'center'  }} onClick = {handleLessonButton} variant="secondary"> <AiOutlineFileAdd></AiOutlineFileAdd> Add a Lesson </Button>


   if (lessons.length === 0) {return <Card className="d-flex justify-content-center align-items-center vh-100 border-0" style={{marginTop: '5%'}}>
    <Card.Title style={{fontFamily: 'poppinsBold'}}>There is no lesson for this course yet. </Card.Title> 
    <Card.Body>{addLessonButton} {viewLessonForm ? <NewLessonForm/> : ''}</Card.Body>
     </Card>}

  

    const onEditLesson = (modifiedLesson) => {
        const updateLesson = lessons.map(lesson => lesson.id === modifiedLesson.id ? modifiedLesson : lesson)
        setCurrentLesson(updateLesson)
        setLessonLists(updateLesson)
    }

    const onDeleteLesson = (lessonId) => {
        const updatedLessonLists = lessons.filter(lesson => lesson.id !== lessonId)
        setLessonLists(updatedLessonLists)
        setCurrentLesson(updatedLessonLists)
    }

    const lessonArray = lessons.map((lesson,index) => (
        <MyCreatedLesson
            key = {lesson.id}
            lesson={lesson}
            index={index + 1}
            onEditLesson={onEditLesson}
            onDeleteLesson={onDeleteLesson}
        />
      ))
  return (
    <Card border='dark'>
        <pre>{JSON.stringify({errors, lessonLists, currentLesson, description, reviews, instructor_id},null, 2)}</pre>
        <br  />
        <Card.Title align="middle" style={{fontFamily: 'poppinsBold'}}>{title}</Card.Title>
        <Card.Body className='enrolledLesson'>
            {lessonArray}
        </Card.Body>
    </Card>
  )
}

export default MyCourseDetail