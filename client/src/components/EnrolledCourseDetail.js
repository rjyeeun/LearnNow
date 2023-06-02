import React, {useState, useEffect} from 'react'
import EnrolledLessonCard from './EnrolledLessonCard'
import {useParams} from "react-router-dom";
import {Card} from 'react-bootstrap';
import ReviewCard from './ReviewCard'
import NewReviewForm from './NewReviewForm';
import {MdOutlineRateReview} from 'react-icons/md'

export default function EnrolledCourseDetail({currentUser}) {
  const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
  const {id} = useParams()

  //getting one course data from db
  useEffect(() => {
    fetch(`/api/courses/${id}`)
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
            setCourse(data);
            });
        } 
    });
}, [id]);

const {lessons, title, reviews} = course
  //sending each lesson to EnrolledLessonCard component

  const onDeleteReview = (currentReviewId) => {
    // const updatedReviewList = reviews.filter((review) => review.id !== currentReviewId)
    
}

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
                    <Card.Title align="middle" style={{fontFamily: 'DMSansBold', fontSize: '1.5em'}}>{title}</Card.Title>
                     {lessonArray.length === 0 ? <Card.Text align='middle'>There is no registered lesson for this course.</Card.Text> : <Card.Text>{lessonArray}</Card.Text>}
                    <Card.Title align="middle" style={{fontFamily: 'DMSansBold', fontSize: '1.5em', backgroundColor: '#ffc107'}}>Review <MdOutlineRateReview/> </Card.Title>
                    {reviews.length === 0 ? (
                    <Card.Body align="middle" style={{fontFamily: 'DMSansRegular'}}>Be the first to share your thoughts! <br/> This course doesn't have any reviews yet, but we'd love to hear what you think. <br /> Leave a review and help others discover the best courses!</Card.Body>
                    ) : (
                    reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} course={course} currentUser={currentUser} onDeleteReview={(onDeleteReview)}/>
                    ))
)}
                </Card.Body>
              <NewReviewForm reviews={reviews} currentUser={currentUser} course={course}/>
            </Card>
    </div>
  )
}
