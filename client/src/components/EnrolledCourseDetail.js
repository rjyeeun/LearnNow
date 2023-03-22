import React, {useState, useEffect} from 'react'
import LessonCard from './LessonCard'
import {Button , Card, Form} from 'react-bootstrap';
import ReviewCard from './ReviewCard'
import NewReviewForm from './NewReviewForm';

export default function EnrolledCourseDetail({currentEnrolledCourse, currentUser}) {
  const {id, thumnail_img, title, description, price, lessons, reviews, instructor_id} = currentEnrolledCourse

  const [viewReviews, setViewReviews] = useState(false)
  const handleClick = () => {
    setViewReviews(prev => !prev)
    };

  const lessonArray = lessons.map(lesson => (
    <LessonCard
        key = {lesson.id}
        lesson={lesson}
    />
  ))
  return (
    <div>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle">{title}</Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Title align="middle" style={{ 'backgroundColor': '#ffce4c'}}>Lesson</Card.Title> <br/>
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

                      <NewReviewForm reviews={reviews}/>
            </Card.Body>
        </Card>
    </div>
  )
}
