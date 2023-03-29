import React, {useEffect, useState} from 'react'
import EnrolledCourseCard from './EnrolledCourseCard'
import {Button , Card, Form} from 'react-bootstrap';
import MyCreatedCourseCard from './MyCreatedCourseCard';
import {SlEmotsmile} from 'react-icons/sl'

export default function UserDashboard({currentUser, courses, setCourses}) {
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
  fetch('/my_courses')
  .then(res => {
    if(res.ok) {
      res.json().then(data => setMyCourses(data));
    }
  })
},[])

console.log(myCourses)

  const onDeleteEnrolledCourse = (currentEnrolledCourseId) => {
    const updatedEnrolledCourseLists = userEnrolledCourses.filter((course) => course.course.id !== currentEnrolledCourseId)
    setUserEnrolledCourses(updatedEnrolledCourseLists)
  }

  const onDeleteCourse = (id) => {
    const updatedCourses = myCourses.filter((course) => course.id !== id);
        setMyCourses(updatedCourses)
        setCourses(updatedCourses); }


  return (
    <>
    <br />
    <h1 size='lg' align='middle' style={{fontFamily: 'poppinsRegular'}}> Hello, {currentUser.name} <SlEmotsmile style={{color: '#ffce4c'}}/> </h1>
    <br />
    <h2 align='middle' style={{fontFamily: 'poppinsMedium'}}>Enrolled Courses</h2>
    <br />
    {userEnrolledCourses.length === 0? <Card.Body align="middle">You have no enrolled course.</Card.Body> : <div class="row row-cols-4 g-2">{userEnrolledCourses.map(course => <EnrolledCourseCard key={course.id} course={course} userEnrolledCourses={userEnrolledCourses} onDeleteEnrolledCourse={onDeleteEnrolledCourse} currentUser={currentUser}/>)}</div>}
    <br />
    <h2 align='middle' style={{fontFamily: 'poppinsMedium'}}>Created Courses</h2>
    <br />
    {myCourses.length === 0? <Card.Body align="middle">You have no created course.</Card.Body> : <Card.Body>{myCourses.map(myCourse => <MyCreatedCourseCard key={myCourse.id} myCourse={myCourse} myCourses={myCourses} setMyCourses={setMyCourses} currentUser={currentUser} setCourses={setCourses} onDeleteCourse={onDeleteCourse}/>)}</Card.Body>}
    </>
  )
}
