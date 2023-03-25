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

  //getting one course data from db
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
  //sending each lesson to EnrolledLessonCard component
  const lessonArray = lessons.map((lesson,index) => (
    <EnrolledLessonCard
        key = {lesson.id}
        lesson={lesson}
        index={index + 1}
    />
  ))
  return (
    <div>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle">{title}</Card.Title>
                     {lessonArray.length === 0 ? <Card.Text align='middle'>There is no registered lesson for this course.</Card.Text> : <Card.Text>{lessonArray}</Card.Text>}
                    <Card.Title align="middle">Review</Card.Title>
                    {reviews.length === 0 ? (
                    <Card.Body align="middle">Be the first to share your thoughts! This course doesn't have any reviews yet, but we'd love to hear what you think. Leave a review and help others discover the best courses!</Card.Body>
                    ) : (
                    reviews.map((review) => (
                    <ReviewCard key={review.id} review={review}course={course}/>
                    ))
)}
                </Card.Body>
              <NewReviewForm reviews={reviews} currentUser={currentUser} course={course}/>
            </Card>
    </div>
  )
}
