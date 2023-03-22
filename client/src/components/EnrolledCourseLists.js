import React from 'react'
import {Button , Card, Form} from 'react-bootstrap';
import {MdOutlineRateReview} from 'react-icons/md'
import {AiOutlineLike} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";

export default function EnrolledCourseLists({currentUser, enrolledCourse, courses, setCurrentEnrolledCourse, currentEnrolledCourse, onDeleteCurrentEnrolledCourse}) {

  const navigate = useNavigate()
 const course = courses.find(c => c.id === enrolledCourse.course_id)


 const {id, thumnail_img, title, description, price, lessons, reviews, instructor_id} = course

 let review_count = course.reviews.map((review) => review)
 const review_count_total = review_count.length

 const handleClick = (e) => {
  setCurrentEnrolledCourse({...course, [e.target.name]: e.target.value })
}



const handleDelete = () => {
  console.log(enrolledCourse.course_id)
  console.log("course id:", course.id)
  if (enrolledCourse.course_id === course.id){
    fetch(`/users/${currentUser.id}/enrolled_courses/${enrolledCourse.id}}}`,
        { method: 'DELETE'})
        .then(() => onDeleteCurrentEnrolledCourse(setCurrentEnrolledCourse))

        navigate('/dashboard')
    }
    else {
       alert("Error")
      }
  }



  return (
    <>
    <Card onClick={handleClick} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumnail_img}/>
        <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Card.Text>{course.difficulty}</Card.Text>
        <p><AiOutlineLike/>{course.like_count_total} <MdOutlineRateReview/>{review_count_total}</p>
        </Card.Body>
      </Card>
        <Button onClick={handleDelete}>Leave the Course</Button>
    </>
  )
}
