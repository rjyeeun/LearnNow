import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import EnrolledCourseLists from './components/EnrolledCourseLists';
import UserDashboard from './components/UserDashboard';
import NewCourseForm from './components/NewCourseForm';
import CourseDetails from './components/CourseDetails';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");
  const [currentCourse, setCurrentCourse] = useState('');
  const [courseReviews, setCourseReviews] = useState([]);

  //get all courses from the db
  useEffect(() => {
    fetch("/courses")
    .then((r) => r.json())
    .then((data) => setCourses(data))
  }, [courseReviews]);


  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     const response = await fetch('/api/users/check_login');
  //     const data = await response.json();
  //     if (data.logged_in) {
  //       setLoggedIn(true);
  //       setUser(data.user);
  //     }
  //   };
  //   checkLoggedIn();
  // }, []);

  // const handleLogout = async () => {
  //   const response = await fetch('/api/users/logout', { method: 'DELETE' });
  //   if (response.status === 204) {
  //     setLoggedIn(false);
  //     setUser(null);
  //   }
  // };

  return (
    <>
      <Header courses={courses} />
      <Routes>
        <Route exact path="/" 
         element = { <Home
         courses={courses}
         currentCourse={currentCourse}
         setCurrentCourse={setCurrentCourse}/> } />
        <Route exact path="/signup"
          element= {<Signup />} />
        <Route exact path="/login"
          element= {<Login/>} />
        <Route exact path="/courses/:id"
          element = {<CourseDetails 
          courses={courses}
          currentCourse={currentCourse}
          courseReviews={courseReviews}
          setCourseReviews={setCourseReviews} />} />
        <Route exact path="/createcourse"
         element= {<NewCourseForm
        //  currentUser={currentUser}
         setCourses={setCourses}
         />} />
        <Route exact path="/enrolled"
          element = {<EnrolledCourseLists />}/>
        <Route exact path="/dashboard"
          element = {<UserDashboard/>} />
      </Routes>
    </>
  );
}

export default App;