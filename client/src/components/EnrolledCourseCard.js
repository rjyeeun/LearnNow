import React, {useState, useEffect} from 'react'
import { FaStar } from 'react-icons/fa';
import {BiTime} from 'react-icons/bi'
import {useNavigate} from "react-router-dom";
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import {Button , Card, Form} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
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
    fetch(`/api/users/${currentUser.id}/enrolled_courses/${course.id}`,
      { method: 'DELETE' })
      .then(() => {
        onDeleteEnrolledCourse(id);
        navigate('/dashboard');
        alert("You have successfully left the course.");
      })
  }

  const [totalDuration, setTotalDuration] = useState(0);

  function sumLessonDuration(lessons) {
      let totalDuration = 0;
      lessons.forEach((lesson) => {
        totalDuration += lesson.duration;
      });
      return totalDuration;
    } 
  useEffect(() => {
    if (course && course.lessons) {
      const duration = sumLessonDuration(course.lessons);
      setTotalDuration(duration);
    }
  }, [course]);

  //get average review rating associated with a course
  const sum = course.reviews.reduce((total, review) => total + review.rating, 0);
  const average = sum / course.reviews.length;
  const stars = [];
      for (let i = 0; i < 5; i++) {
          stars.push(
              <FaStar key={i} color={i < average ? '#ffc107' : '#e4e5e9'} />
          );
      }
  
  return (
<CardGroup align='center' className="d-flex justify-content-center">
    <Card >
    <Link style={{textDecoration: 'none', color: 'black'}} to={`/enrolledcourse/${id}`}>
        <Card.Img variant="top" src={thumbnail_img} style={{ height: "12rem", objectFit: "cover" }}/>
        <Card.Body style={{ backgroundColor: "#f2f2f2"}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{difficulty} Level </Card.Text>
            <p>{stars} ({review_count_total}) | <BiTime/>{totalDuration} </p>
            <Card.Title size= 'large' align='right'>Lifetime Access</Card.Title>
        </Card.Body>
    </Link>
        <Button onClick={handleDelete} style={{backgroundColor: '#c4391d'}}>Leave the course</Button>
    </Card>
</CardGroup>
  )
}
