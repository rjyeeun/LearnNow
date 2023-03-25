import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard'
import {useNavigate, useParams} from "react-router-dom";
import NewReviewForm from './NewReviewForm'
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import {Button , Card, Form} from 'react-bootstrap';
import imagePlaceholder from './imagePlaceholder.png'
import LessonList from './LessonList'
import EnrolledCourseLists from './EnrolledCourseCard'

export default function CourseDetails({onDeleteCourse, courses, setCourses, currentUser}) {
    const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
    const {enrolled_courses} = currentUser
    const [enrolledCourses, setEnrolledCourses] = useState({enrolled_courses})
    const [viewReviews, setViewReviews] = useState(false)
    const [errors, setErrors] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    let enrolled_course_id = enrolled_courses.map((course) => course.course_id)

    useEffect(() => {
        fetch(`/courses/${id}`)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                setCourse(data);
                });
            } else {
                console.log("error");
                res.json().then(data => setErrors(data.error));
            }
        });
    }, [id]);

    const {lessons, title, description, reviews, instructor_id} = course


    //when click view review, it opens the review
    const handleClick = () => {
        setViewReviews(prev => !prev)
        };

    
        const handleDelete = (id) => {
            fetch(`/courses/${id}`, { method: 'DELETE' })
              .then(() => {
                const updatedCourses = courses.filter(course => course.id !== id);
                setCourses(updatedCourses);
                navigate('/')
              })
              .catch(err => console.log(err));
          };
        // const handleDelete = () => {
        //     fetch(`/courses/${id}`,
        //     { method: 'DELETE'})
        //     .then(() => onDeleteCourse(id))
        //     navigate('/')
        // }

        console.log(course.instructor_id) 
        console.log(currentUser.id)

    const lessonArray = lessons.map(lesson => (
        <LessonList
            key = {lesson.id}
            lesson={lesson}
        />
    ))
    const deleteButton = <Button style={{'backgroundColor': 'red'}} onClick={() => handleDelete(course.id)}>Delete My Course </Button>

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //check if user already has enrolled to the course
        if (!enrolled_course_id.includes(course.id)) {
            const newEnrolledCourse = {
            user_id: currentUser.id,
            course_id: id
            };

            fetch(`/users/${currentUser.id}/enrolled_courses`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newEnrolledCourse)
            })
            .then(res => { 
                if(res.status === 201) {
                    fetch(`/users/${currentUser.id}/enrolled_courses`)
                        .then(res => res.json())
                        .then(data => setEnrolledCourses(data))
                        alert("You have successfully enrolled the course!")
                        navigate('/dashboard');
                } else {
                    alert("You are already enrolled!");
                }
            });
            } else {
                alert("You are already enrolled!");
            }
            };



    return (
        <div>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Title align="middle" style={{ 'backgroundColor': '#ffce4c'}}>Lesson Lists</Card.Title> <br/>
                    <Card.Text style={{ 'backgroundColor': '#ffce4c', position:'center' }}>{lessonArray}</Card.Text>
                    <Card.Body> {viewReviews ? <Button onClick = {handleClick} variant="secondary"> hide </Button> :
                    <Button style={{ 'backgroundColor': '#ffce4c', position:'center' }} onClick = {handleClick}> view reviews </Button> }
                </Card.Body>
                    {viewReviews ? reviews.map(review => (
                        <ReviewCard
                        key={review.id}
                        review={review}
                        />
                    )) : ''} 
            </Card.Body>
            {currentUser.id === instructor_id ? deleteButton : null}
            <Button type="submit" style={{ 'backgroundColor': '#9ccbd5'}} onClick={handleSubmit}>Enroll</Button>
        </Card>
    </div>
    )
}
