import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactPlayer from 'react-player';

export default function NewLessonForm({courses, setCourses}) {
  const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
  const [lessons, setLessons] = useState({title: '', description: '', duration: '', content: '', course_id: ''})
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const {id} = useParams()
  const [errors, setErrors] = useState(false)

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

console.log(course.id)

  function handleSubmit(e) {
    e.preventDefault();
  
    const newLesson = {
        title: title,
        description: description,
        duration: duration,
        content: content,
        course_id: course.id
    }
  
    console.log(newLesson)
  
  try {
    fetch(`/courses/${course.id}/lessons`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newLesson),
    })
    // .then(resp => resp.json())
    .then(res => {
        if(res.status === 201) {
        fetch(`/courses/${course.id}/lessons`)
        .then((r) => r.json())
        .then((data) => setLessons(data))
        alert("Lesson Successfully Created!")
        window.location.reload()
    } else {
      res.json().then((errorData)=> alert(errorData.errors))
    }
    })}
    catch (error){
      console.log(error.message);
  }
    // navigate("/posts")
  }

  return (
      <div  class= 'd-flex justify-content-center' style={{backgroundColor:' #9ccbd5', padding: '3em'}}>
        <Form  onSubmit={handleSubmit} >
        <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium', color: '#fafafa'}}>New Lesson Form</h1>
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Lesson Title</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} type="text" value={title} onChange={(e) => setTitle(e.target.value)}  />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Description</Form.Text>
                <Form.Control type="text" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} value={description} as='textarea' onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Duration(minutes)</Form.Text>
                <Form.Control type="integer" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} value={duration} onChange={(e) => setDuration(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Content</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', color: '#fafafa', fontFamily:'DMSans'}}  value={content} onChange={(e) => setContent(e.target.value)} />
                {content && (<ReactPlayer url={content} controls={true} width="100%"/>)}
            </Form.Group>
            <br />
        <Form.Group align='middle'><Button type='submit'>Add Lesson</Button></Form.Group>
        </Form>
      </div>
  )
}
