import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard'
import NewReviewForm from './NewReviewForm'
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import {Button , Card, Form} from 'react-bootstrap';
import imagePlaceholder from './imagePlaceholder.png'
import LessonList from './LessonList'
import EnrolledCourseLists from './EnrolledCourseLists'

export default function CourseDetails({currentCourse, setCurrentCourse, courseReviews, setCourseReviews}) {
    const {id, title, description, price, lessons, reviews} = currentCourse
    const [viewReviews, setViewReviews] = useState(false)

    const handleClick = () => {
        setViewReviews(prev => !prev)
        };

    const lessonArray = lessons.map(lesson => (
        <LessonList
            key = {lesson.id}
            lesson={lesson}
        />
    ))

    const handleSubmit = (e) => {
        console.log("submitted")
    }

    return (
        <div>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle">{title}</Card.Title>
                    <Card.Img src={imagePlaceholder} />
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
            <Button type="submit" style={{ 'backgroundColor': '#9ccbd5'}} onClick={handleSubmit}>Enroll</Button>
        </Card>
    </div>
    )
}
