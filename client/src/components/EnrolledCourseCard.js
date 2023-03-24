import React from 'react'
import {useNavigate} from "react-router-dom";
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import {Button , Card, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function EnrolledCourseCard({course, currentUser, onDeleteEnrolledCourse}) {
  
  const navigate = useNavigate()
  const {id, title, description, difficulty, price, thumbnail_img, lessons, reviews, user_liked_courses} = course.course
  //get total number of likes 
  let like_count = course.user_liked_courses.map ((like) => like)
  const like_count_total = like_count.length

  //get total number of reviews
  let review_count = course.reviews.map((review) => review)
  const review_count_total = review_count.length
  const handleDelete = () => {
      fetch(`/users/${currentUser.id}/enrolled_courses/${course.id}`,
      { method: 'DELETE'})
      .then(() => onDeleteEnrolledCourse(id))

      .then(alert("successfully deleted"))
  }

  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
        <Link to={`/enrolledcourse/${id}`}>
        <Card.Img variant="top" src={thumbnail_img}/></Link>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{difficulty}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <p><AiOutlineLike/>{like_count_total} <MdOutlineRateReview/>{review_count_total}</p>
        </Card.Body>
        <Button onClick={handleDelete}>Leave the course</Button>
    </Card>
    </div>
  )
}
