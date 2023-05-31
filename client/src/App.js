import React, { useState, useEffect } from 'react';
import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import EnrolledCourseDetail from './components/EnrolledCourseDetail';
import UserDashboard from './components/UserDashboard';
import NewCourseForm from './components/NewCourseForm';
import CourseDetails from './components/CourseDetails';
import MyCourseDetail from './components/MyCourseDetail';

function App() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({enrolled_courses: [], instructor_courses: []});
  const [courses, setCourses] = useState([]);//all the  courses
  const [searchCourse, setSearchCourse] = useState(""); //searched courses on home page
  const [myCourses, setMyCourses] = useState([])
  const [category, setCategory] = useState("All")


  //get all courses from the db
  useEffect(() => {
    fetch("/api/courses")
    .then((r) => r.json())
    .then((data) => setCourses(data))
  }, []); //???


  //get current users
  useEffect(() => {
    fetch("/api/auth")
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  //get all users
  useEffect(()=> {
    fetch("/api/users")
    .then(r => r.json())
    .then(data => {
      setUsers(data)
    })
  }, [])


//get current user's created courses
useEffect(() => {
  fetch(`/api/users/${currentUser.id}/instructor_courses`)
  .then(res => {
    if(res.ok) {
      res.json().then(data => setMyCourses(data));
    }
  })
},[])

console.log(myCourses)
 
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

  const filteredCategory = filteredCourses.filter(course => {
    if (category === 'All') return true
    return course.category === category

  })
  //deletes course current user created
  // const onDeleteCourse = (id) => {
  //   const updatedCourse = courses.filter((course) => course.id !== id)
  //   setCourses(updatedCourse)
  // }

  const fetchCoursesByCategory = (category) => {
    const filteredCourses = courses.filter(course => course.category === category);
    setCourses(filteredCourses);}

  return (
    <>
      <Header 
      courses={filteredCategory}
      changeSearch={changeSearch}
      searchCourse={searchCourse} 
      currentUser={currentUser}
      category={category}
      setCategory={setCategory}/>
      
      <Routes>
        <Route exact path="/" 
         element = { <Home
         courses={filteredCategory}
         searchCourse={searchCourse}/> } />
        <Route exact path="/signup"
          element= {<Signup />} />
        <Route exact path="/login"
          element= {<Login
          handleUserLogin={handleUserLogin}/>} />
        <Route path="/courses/:id" 
          element = {<CourseDetails  //one course page
          currentUser={currentUser}
          courses={courses}
          setCourses={setCourses}
          myCourses={myCourses}
          setMyCourses={setMyCourses}
           />} />
        <Route exact path="/newcourse"
         element= {<NewCourseForm
          currentUser={currentUser}
          setCourses={setCourses}
         />} />
        <Route exact path="/enrolledcourse/:id"
          element = {<EnrolledCourseDetail
            currentUser={currentUser}
          />}/>
        <Route exact path="/dashboard"
          element = {
          <UserDashboard
              currentUser={currentUser}
              courses={courses}
              setCourses={setCourses}
            />} />
        <Route exact path="/mycourse/:id"
        element = {<MyCourseDetail/>} />
      </Routes>
    </>
  );
}

export default App;