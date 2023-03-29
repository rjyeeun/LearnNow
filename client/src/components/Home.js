import React, {useState, useEffect} from 'react'
import CourseCard from './CourseCard'
import { Card, Col, Row, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedCourses from './FeaturedCourses';

export default function Home({ courses, searchCourse }) {


  const courseArray = courses.map(course => <CourseCard key={course.id} course={course}/>)

  return (
    <div>
      {searchCourse? null : <FeaturedCourses />}
      <Row className="row-cols-5 g-4">
        {courseArray}
      </Row>
    </div>
  );
}