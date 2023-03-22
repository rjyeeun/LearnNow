import React from 'react'
import CourseCard from './CourseCard'
import {Link} from 'react-router-dom';

export default function Home({courses, currentCourse, setCurrentCourse, onDeleteCourse}) {
    const courseArray = courses.map(course => 
    <Link style={{ textDecoration: 'none', color: 'black' }}  key={course.id} to ={`/courses/${course.id}`} >
        <CourseCard
        key={course.id}
        course={course}
        currentCourse={currentCourse}
        setCurrentCourse={setCurrentCourse}
        onDeleteCourse={onDeleteCourse}
        />
    </Link>)

return  (
    <div class="row row-cols-5 g-0">{courseArray}</div>
)

}