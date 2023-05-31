import React, { useEffect, useState } from 'react';
import EnrolledCourseCard from './EnrolledCourseCard';
import MyCreatedCourseCard from './MyCreatedCourseCard';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { SlEmotsmile } from 'react-icons/sl';

export default function UserDashboard({ currentUser, courses, setCourses }) {
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);

  //get current user's enrolled courses
  useEffect(() => {
    fetch(`/api/users/${currentUser.id}/enrolled_courses`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setUserEnrolledCourses(data));
        }
      });
  }, []);

  //get current user's created courses
  useEffect(() => {
    fetch('/api/my_courses')
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setMyCourses(data));
        }
      });
  }, []);

  const onDeleteEnrolledCourse = (currentEnrolledCourseId) => {
    const updatedEnrolledCourseLists = userEnrolledCourses.filter((course) => course.course.id !== currentEnrolledCourseId);
    setUserEnrolledCourses(updatedEnrolledCourseLists);
  };

  const onDeleteCourse = (id) => {
    const updatedCourses = myCourses.filter((course) => course.id !== id);
    setMyCourses(updatedCourses);
    setCourses(updatedCourses);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <h1 size="lg" align="middle" style={{ fontFamily: 'poppinsRegular' }}> Hello, {currentUser.name} <SlEmotsmile style={{ color: '#ffce4c' }} /></h1>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title align="middle" style={{ fontFamily: 'poppinsMedium' }}>Enrolled Courses</Card.Title>
                <br />
                {userEnrolledCourses.length === 0 ? <p align="middle">You have no enrolled course.</p> : <div class="row row-cols-2 g-2">{userEnrolledCourses.map(course => <EnrolledCourseCard key={course.id} course={course} userEnrolledCourses={userEnrolledCourses} onDeleteEnrolledCourse={onDeleteEnrolledCourse} currentUser={currentUser} />)}</div>}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title align="middle" style={{ fontFamily: 'poppinsMedium' }}>Created Courses</Card.Title>
                <br />
                {myCourses.length === 0 ? <p align="middle"> You have no created course.</p> : <div>{myCourses.map(myCourse => <MyCreatedCourseCard key={myCourse.id} myCourse={myCourse} myCourses={myCourses} setMyCourses={setMyCourses} currentUser={currentUser} setCourses={setCourses} onDeleteCourse={onDeleteCourse} />)}</div>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
