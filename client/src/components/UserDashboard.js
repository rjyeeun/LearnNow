import React, {useEffect, useState} from 'react'
import CourseCard from './CourseCard'
import EnrolledCourseCard from './EnrolledCourseCard'
import {Button , Card, Form} from 'react-bootstrap';

export default function UserDashboard({currentUser}) {
const [userEnrolledCourses, setUserEnrolledCourses] = useState([])

//get current user's enrolled courses
  useEffect(() => {
    fetch(`/users/${currentUser.id}/enrolled_courses`)
    .then(res => {
      if(res.ok) {
        res.json().then(data => setUserEnrolledCourses(data));
      }
    })
  },[])

  console.log(userEnrolledCourses)

  console.log(userEnrolledCourses.map(course => course.course))

  const onDeleteEnrolledCourse = (currentEnrolledCourseId) => {
    const updatedEnrolledCourseLists = userEnrolledCourses.filter((course) => course.course.id !== currentEnrolledCourseId)
    setUserEnrolledCourses(updatedEnrolledCourseLists)
  }
  return (
    <>
    <br />
    <Card.Title size='lg' align='middle'>{currentUser.name}'s dashboard</Card.Title>
    <br />
    {userEnrolledCourses.length === 0? <Card.Body align="middle">You have no enrolled course.</Card.Body> : <div class="row row-cols-5 g-0">{userEnrolledCourses.map(course => <EnrolledCourseCard key={course.id} course={course} userEnrolledCourses={userEnrolledCourses} onDeleteEnrolledCourse={onDeleteEnrolledCourse} currentUser={currentUser}/>)}</div>}
    
    </>
  )
}
