import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard'
import {useNavigate, useParams} from "react-router-dom";
import {Button , Card } from 'react-bootstrap';
import LessonList from './LessonList'
import {MdOutlineRateReview} from 'react-icons/md'

export default function CourseDetails({onDeleteCourse, courses, setCourses, currentUser, myCourses, setMyCourses}) {
    const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
    const {enrolled_courses} = currentUser || []
    const [enrolledCourses, setEnrolledCourses] = useState({enrolled_courses})
    const [viewReviews, setViewReviews] = useState(false)
    const [errors, setErrors] = useState(false)
    const [reviewLists, setReviewLists] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    let enrolled_course_id = enrolled_courses.map((course) => course.course_id)

    //get one current course from db
    useEffect(() => {
        fetch(`/api/courses/${id}`)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                setCourse(data);
                });
            } else {
                res.json().then(data => setErrors(data.error));
            }
        });
    }, [id]);

    const {lessons, title, description, reviews, instructor_id} = course

    //function for deleting review and update the state of reviewLists
    const onDeleteReview = (currentReviewId) => {
        const updatedReviewList = reviews.filter((review) => review.id !== currentReviewId)
        setReviewLists(updatedReviewList)
    }

    //when click view review, it opens the review
    const handleClick = () => {
        setViewReviews(prev => !prev)
        };
    
    const lessonArray = lessons.map((lesson,index) => (
        <LessonList
        key = {lesson.id}
        lesson={lesson}
        index={index + 1}
        />
    ))

    
    //enroll the course
    const handleSubmit = (e) => {
        e.preventDefault();
        //check if user already has enrolled to the course
        if (!enrolled_course_id.includes(course.id)) {
            const newEnrolledCourse = {
            user_id: currentUser.id,
            course_id: id
            };

            fetch(`/api/users/${currentUser.id}/enrolled_courses`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newEnrolledCourse)
            })
            .then(res => { 
                if(res.status === 201) {
                    fetch(`/api/users/${currentUser.id}/enrolled_courses`)
                    .then(res => res.json())
                    .then(data => setEnrolledCourses(data))
                    alert("You have successfully enrolled the course!")
                    navigate('/dashboard');
                } else if (res.status === 401){
                    alert("You need to login to enroll the course!");
                    navigate('/login')
                }
            });
            } else {
                alert("You are already enrolled!");
            }
    };
            //review count
            const viewReviewCount = course.reviews.length
            //enroll Button
            const enrollButton = <Button size='md' type="submit" style={{ 'backgroundColor': '#9ccbd5', fontFamily: 'poppinsBold'}} onClick={handleSubmit}>Enroll Course</Button>
            
    return (
    <>
        <div className="d-flex justify-content-center" style={{marginTop: '5%', color: '#0c3954'}}>
            <Card border="dark">
                <Card.Body>
                    <Card.Title align="middle" style={{fontFamily: 'poppinsBold'}}>{title}</Card.Title>
                    <Card.Text align="middle" style={{fontFamily: 'poppinsRegular'}}>{description}</Card.Text>
                    <Card.Text style={{ fontFamily: 'DBSansRegular' }}>{lessonArray}</Card.Text>
                    <Card.Body align='left'> {viewReviews ? <Button style={{'backgroundColor': '#000000'}}onClick = {handleClick}> Hide Review </Button> :
                    <Button style={{ position:'center', 'backgroundColor': '#000000', fontFamily: 'poppins'}} onClick = {handleClick}> <MdOutlineRateReview/> {viewReviewCount} </Button> }
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
                <Card.Body align='middle'>{currentUser.id === instructor_id ? null : enrollButton} </Card.Body>
                </Card.Body>
            </Card>
        </div>
    </>
    )
}
