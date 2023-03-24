import React, {useEffect, useState} from 'react'
import CourseCard from './CourseCard'
import EnrolledCourseCard from './EnrolledCourseCard'

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

  const onDeleteEnrolledCourse = (currentEnrolledCourseId) => {
    const updatedEnrolledCourseLists = userEnrolledCourses.filter((course) => course.id !== currentEnrolledCourseId)
    setUserEnrolledCourses(updatedEnrolledCourseLists)
  }
  return (
    <div class="row row-cols-5 g-0">{userEnrolledCourses.map(course => <EnrolledCourseCard key={course.id} course={course} userEnrolledCourses={userEnrolledCourses} onDeleteEnrolledCourse={onDeleteEnrolledCourse} currentUser={currentUser}/>)}</div>
  )
}
