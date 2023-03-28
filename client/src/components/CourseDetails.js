import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard'
import {useNavigate, useParams} from "react-router-dom";
import {Button , Card, Form} from 'react-bootstrap';
import LessonList from './LessonList'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import NewLessonForm from './NewLessonForm'
import EditLessonForm from './EditLessonForm'

export default function CourseDetails({onDeleteCourse, courses, setCourses, currentUser}) {
    const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
    const {enrolled_courses} = currentUser || []
    const [enrolledCourses, setEnrolledCourses] = useState({enrolled_courses})
    const [viewReviews, setViewReviews] = useState(false)
    const [viewLessonForm, setViewLessonForm] = useState(false)
    const [editLessonForm, setEditLessonForm] = useState(false)
    const [errors, setErrors] = useState(false)
    const [reviewLists, setReviewLists] = useState([])
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

    const onDeleteReview = (currentReviewId) => {
        const updatedReviewList = reviews.filter((review) => review.id !== currentReviewId)
        setReviewLists(updatedReviewList)
    }

    //when click view review, it opens the review
    const handleClick = () => {
        setViewReviews(prev => !prev)
        };
    
    const handleLessonButton = () => {
        setViewLessonForm(prev => !prev)
    }

    const handleEditLesson = () => {
        setEditLessonForm(prev => !prev)
    }
    
        const handleDelete = (id) => {
            fetch(`/courses/${id}`, { method: 'DELETE' })
              .then(() => {
                const updatedCourses = courses.filter(course => course.id !== id);
                setCourses(updatedCourses);
                alert('Course successfully deleted!')
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


    const lessonArray = lessons.map((lesson,index) => (
        <LessonList
        key = {lesson.id}
        lesson={lesson}
        index={index + 1}
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
            const viewReviewCount = course.reviews.length
            const enrollButton = <Button size='md' type="submit" style={{ 'backgroundColor': '#9ccbd5', fontFamily: 'poppinsBold'}} onClick={handleSubmit}>Enroll Course</Button>
            const addLessonButton = <Button style={{ position:'center'  }} onClick = {handleLessonButton} variant="secondary"> <AiOutlineFileAdd></AiOutlineFileAdd> Add a Lesson </Button>
            const editLessonButton = <Button onClick = {handleEditLesson} variant="secondary"> Edit Lesson </Button>
    return (
    <>
        <div className="d-flex justify-content-center" style={{marginTop: '5%', color: '#0c3954'}}>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle" style={{fontFamily: 'poppinsBold'}}>{title}</Card.Title>
                    <Card.Text align="middle" style={{fontFamily: 'poppinsRegular'}}>{description}</Card.Text>
                    <Card.Text style={{ fontFamily: 'DBSansRegular' }}>{lessonArray}</Card.Text>
                    <Card.Body align='left'> {viewReviews ? <Button style={{'backgroundColor': '#000000'}}onClick = {handleClick}> Hide Review </Button> :
                    <Button style={{ position:'center', 'backgroundColor': '#000000', fontFamily: 'poppins'}} onClick = {handleClick}> <MdOutlineRateReview/>{viewReviewCount} </Button> }
                </Card.Body>
                    {viewReviews ? reviews.map(review => (
                        <ReviewCard
                        key={review.id}
                        review={review}
                        currentUser={currentUser}
                        course={course}
                        onDeleteReview={onDeleteReview}
                        />
                    )) : ''} 
                <Card.Body align='middle'>{currentUser.id === instructor_id ? deleteButton : null} {currentUser.id === instructor_id ? null : enrollButton} </Card.Body>
                <Card.Title align='left'>{currentUser.id === instructor_id ? addLessonButton : null}</Card.Title>
                <Card.Title align='right'>{currentUser.id === instructor_id ? editLessonButton : null}</Card.Title>
            </Card.Body>
        </Card>
    {viewLessonForm ? <NewLessonForm/> : ''}
    {editLessonForm ? <EditLessonForm/> : ''}
    </div>
    </>
    )
}
