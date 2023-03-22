import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard'
import {useNavigate} from "react-router-dom";
import NewReviewForm from './NewReviewForm'
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import {Button , Card, Form} from 'react-bootstrap';
import imagePlaceholder from './imagePlaceholder.png'
import LessonList from './LessonList'
import EnrolledCourseLists from './EnrolledCourseLists'

export default function CourseDetails({currentCourse, currentUser, setCurrentCourse, courseReviews, setCourseReviews, onDeleteCourse}) {
    const {id, thumnail_img, title, description, price, lessons, reviews, instructor_id} = currentCourse
    const {enrolled_courses} = currentUser
    const [viewReviews, setViewReviews] = useState(false)
    const [myEnrolledCourse, setMyEnrolledCourse] = useState([])

    const navigate = useNavigate()
    const handleClick = () => {
        setViewReviews(prev => !prev)
        };

    useEffect( () => {
            fetch(`/users/${currentUser.id}/enrolled_courses`)
            .then(r => r.json())
            .then(data => {setMyEnrolledCourse(data)})
        },[])

    const handleDelete = () => {
        if (currentCourse.instructor_id === currentUser.id) {
            console.log("currentUser id: ", currentUser.id);
            console.log("currentCourse id: ", currentCourse.id);
            
            fetch(`/courses/${id}`,
            { method: 'DELETE'})
            .then(() => onDeleteCourse(id))
    
            navigate('/')
        }
        else {
            alert("You cannot delete a post that you didn't post!")
            }
        }

    const lessonArray = lessons.map(lesson => (
        <LessonList
            key = {lesson.id}
            lesson={lesson}
        />
    ))
    const deleteButton = <Button style={{'backgroundColor': 'red'}}onClick={handleDelete}>Delete My Course </Button>

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentUser.id !== enrolled_courses.user_id)
        {const newEnrolledCourse = {
            user_id: currentUser.id,
            course_id: id
        } 
        fetch(`/users/${currentUser.id}/enrolled_courses`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEnrolledCourse)
        })

        .then (res => { 
            if(res.status === 201) {
                fetch(`/users/${currentUser.id}/enrolled_courses`)
                .then(r => r.json())
                .then(data => setMyEnrolledCourse(data))
                navigate('/dashboard') 
            } else {
                alert("you are already enrolled!")
            }
        })}

    }

    return (
        <div>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle">{title}</Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Title align="middle" style={{ 'backgroundColor': '#ffce4c'}}>Lesson Lists</Card.Title> <br/>
                    <Card.Text style={{ 'backgroundColor': '#ffce4c', position:'center' }}>{lessonArray}</Card.Text>
                    <Card.Body> {viewReviews ? <Button onClick = {handleClick} variant="secondary"> hide </Button> :
                    <Button style={{ 'backgroundColor': '#ffce4c', position:'center' }} onClick = {handleClick}> view reviews </Button> }
                </Card.Body>
                    {viewReviews ? reviews.map(review => (
                        <ReviewCard
                        key={review.id}
                        review={review}
                        />
                    )) : ''} 
            </Card.Body>
            {currentUser.id === instructor_id ? deleteButton : null}
            <Button type="submit" style={{ 'backgroundColor': '#9ccbd5'}} onClick={handleSubmit}>Enroll</Button>
        </Card>
    </div>
    )
}
