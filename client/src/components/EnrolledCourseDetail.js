import React, {useState, useEffect} from 'react'
import EnrolledLessonCard from './EnrolledLessonCard'
import {useNavigate, useParams} from "react-router-dom";
import {Button , Card, Form} from 'react-bootstrap';
import ReviewCard from './ReviewCard'
import NewReviewForm from './NewReviewForm';

export default function EnrolledCourseDetail({currentUser}) {
  const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
  const [errors, setErrors] = useState(false)
  const {id} = useParams()
  useEffect(() => {
    fetch(`/courses/${id}`)
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
            setCourse(data);
            });
        } else {
            console.log("error");
            res.json().then(data => setErrors(data.error));
        }
    });
}, [id]);

const {lessons, title, description, reviews, instructor_id} = course

  const [viewReviews, setViewReviews] = useState(false)
  const handleClick = () => {
    setViewReviews(prev => !prev)
    };

  const lessonArray = lessons.map(lesson => (
    <EnrolledLessonCard
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
