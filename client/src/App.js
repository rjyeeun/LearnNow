import React, { useState, useEffect } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import EnrolledCourseDetail from './components/EnrolledCourseDetail';
import UserDashboard from './components/UserDashboard';
import NewCourseForm from './components/NewCourseForm';
import CourseDetails from './components/CourseDetails';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [courses, setCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");
  const [currentCourse, setCurrentCourse] = useState('');
  const [courseReviews, setCourseReviews] = useState([]);
  const [currentEnrolledCourse, setCurrentEnrolledCourse] = useState('')

  //get all courses from the db
  useEffect(() => {
    fetch("/courses")
    .then((r) => r.json())
    .then((data) => setCourses(data))
  }, [courseReviews]);

  console.log("appcourses",courses)


  useEffect(() => {
    fetch("/auth")
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  useEffect(()=> {
    fetch("/users")
    .then(r => r.json())
    .then(data => {
      setUsers(data)
    })
  }, [])


  function handleUserLogin(user) {
    setCurrentUser(user)
  }

   //deactivate user from db
    const onDeleteUser = (id) => {
      const updatedUser = users.filter((currentUser) => currentUser.id !== id)
      setCurrentUser(updatedUser)
    }

      //edit user profile
    const onEditUserProfile = (modifiedUser) => {
      const updateUser = users.map(user => currentUser.id === user.id ? modifiedUser : user)
      setCurrentUser(updateUser)
  }

  //change value on search bar
  const changeSearch = (value) => {
    setSearchCourse(value)
  }

  const filteredCourses = courses.filter(course => (
    course.title.toLowerCase().includes(searchCourse.toLowerCase())
    || course.description.toLowerCase().includes(searchCourse.toLowerCase())
    || course.category.toLowerCase().includes(searchCourse.toLowerCase())
    )
  )

  //Delete a current course that the CurrentUser created
  const onDeleteCurrentEnrolledCourse = (currentEnrolledCourseId) => {
    const updatedCurrentEnrolledCourse = courses.filter((course) => course.id !== currentEnrolledCourseId)
    setCurrentEnrolledCourse(updatedCurrentEnrolledCourse)
  }

  const onDeleteCourse = (currentUserId) => {
    const updatedCourse = courses.filter((course) => course.id !== currentUserId)
    setCourses(updatedCourse)
  }

  return (
    <>
      <Header courses={filteredCourses}
      changeSearch={changeSearch}
      searchCourse={searchCourse} 
      currentUser={currentUser}/>
      <Routes>
        <Route exact path="/" 
         element = { <Home
         courses={filteredCourses}
         currentCourse={currentCourse}
         setCurrentCourse={setCurrentCourse}
         onDeleteCourse={onDeleteCourse}/> } />
        <Route exact path="/signup"
          element= {<Signup />} />
        <Route exact path="/login"
          element= {<Login
          handleUserLogin={handleUserLogin}/>} />
        <Route exact path="/courses/:id"
          element = {<CourseDetails 
          currentUser={currentUser}
          courses={courses}
          currentCourse={currentCourse}
          courseReviews={courseReviews}
          setCourseReviews={setCourseReviews}
          onDeleteCourse={onDeleteCourse}
           />} />
        <Route exact path="/newcourse"
         element= {<NewCourseForm
          currentUser={currentUser}
          setCourses={setCourses}
         />} />
        <Route exact path="/enrolledcourse/:id"
          element = {<EnrolledCourseDetail
            currentEnrolledCourse={currentEnrolledCourse}
            currentUser={currentUser}
          />}/>
        <Route exact path="/dashboard"
          element = {
          <UserDashboard
            courses={courses}
            currentUser= {currentUser}
            onDeleteUser={onDeleteUser}
            onEditUserProfile={onEditUserProfile}
            currentEnrolledCourse={currentEnrolledCourse}
            setCurrentEnrolledCourse={setCurrentEnrolledCourse}
            onDeleteCurrentEnrolledCourse={onDeleteCurrentEnrolledCourse}
            />} />
      </Routes>
    </>
  );
}

export default App;