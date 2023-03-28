import React, {useEffect, useState} from 'react'
import CourseCard from './CourseCard'
import EnrolledCourseCard from './EnrolledCourseCard'
import {Button , Card, Form} from 'react-bootstrap';
import MyCreatedCourseCard from './MyCreatedCourseCard';

export default function UserDashboard({currentUser}) {
const [userEnrolledCourses, setUserEnrolledCourses] = useState([])
const [myCourses, setMyCourses] = useState([])


//get current user's enrolled courses
  useEffect(() => {
    fetch(`/users/${currentUser.id}/enrolled_courses`)
    .then(res => {
      if(res.ok) {
        res.json().then(data => setUserEnrolledCourses(data));
      }
    })
  },[])

//get current user's created courses
useEffect(() => {
  fetch(`/users/${currentUser.id}/instructor_courses`)
  .then(res => {
    if(res.ok) {
      res.json().then(data => setMyCourses(data));
    }
  })
},[])


  const onDeleteEnrolledCourse = (currentEnrolledCourseId) => {
    const updatedEnrolledCourseLists = userEnrolledCourses.filter((course) => course.course.id !== currentEnrolledCourseId)
    setUserEnrolledCourses(updatedEnrolledCourseLists)
  }
  return (
    <>
    <br />
    <Card.Title size='lg' align='middle'>{currentUser.name}'s dashboard</Card.Title>
    <br />
    <Card.Title>Enrolled Courses</Card.Title>
    {userEnrolledCourses.length === 0? <Card.Body align="middle">You have no enrolled course.</Card.Body> : <div class="row row-cols-5 g-0">{userEnrolledCourses.map(course => <EnrolledCourseCard key={course.id} course={course} userEnrolledCourses={userEnrolledCourses} onDeleteEnrolledCourse={onDeleteEnrolledCourse} currentUser={currentUser}/>)}</div>}
    <Card.Title>Created Courses</Card.Title>
    {myCourses.length === 0? <Card.Body align="middle">You have no created course.</Card.Body> : <div>{myCourses.map(course => <MyCreatedCourseCard key={course.id} course={course} myCourses={myCourses} currentUser={currentUser}/>)}</div>}
    </>
  )
}
