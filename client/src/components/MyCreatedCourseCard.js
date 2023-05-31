import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MyCreatedLesson from './MyCreatedLesson';
import {RiDeleteBack2Line} from 'react-icons/ri'

function MyCreatedCourseCard({ myCourse, currentUser, myCourses, setMyCourses, setCourses, onDeleteCourse }) {
    const navigate = useNavigate()
    const handleDeleteCourse = (id) => {
        fetch(`/api/courses/${id}`, { method: 'DELETE' })
        .then(() => alert(`Are you sure you want to delete?`))
        .then(() => {
            alert("You have successfully deleted the course");
            onDeleteCourse(id);
            navigate('/dashboard');
          })
          .catch((err) => console.log(err));
      };

  const deleteButton = (
    <Button style={{ backgroundColor: '#d9534f', border: 'none', fontFamily: 'DMSans', marginLeft: '10px'  }} onClick={() => handleDeleteCourse(myCourse.id)}>
      <RiDeleteBack2Line/> Delete This Course
    </Button>
  );

  return (
    <Card style={{ margin: '20px', backgroundColor: '#f2f2f2', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)' }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', fontFamily: 'DMSansBold' }}>{myCourse.title}</Card.Title>
        <Card.Text style={{ marginBottom: '10px', fontSize: '1.1rem', fontFamily: 'DMSans' }}>{myCourse.description}</Card.Text>
        <Link style={{ textDecoration: 'none' }} to={`/mycourse/${myCourse.id}`}>
          <Button variant="primary" style={{fontFamily: 'DMSans'}}>View Details</Button>
        </Link>
        {deleteButton}
      </Card.Body>
    </Card>
  );
}

export default MyCreatedCourseCard;
