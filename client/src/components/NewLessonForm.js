import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
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
  const {id} = useParams()
  const [errors, setErrors] = useState(false)

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

  function handleSubmit(e) {
    e.preventDefault();
  
    const newLesson = {
        title: title,
        description: description,
        duration: duration,
        content: content,
        course_id: course.id
    }
  
  
  try {
    fetch(`/api/courses/${course.id}/lessons`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newLesson),
    })
    // .then(resp => resp.json())
    .then(res => {
        if(res.status === 201) {
        fetch(`/api/courses/${course.id}/lessons`)
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
      <div  class= 'd-flex justify-content-center' style={{backgroundColor:' #9ccbd5', padding: '3em', borderRadius: '10px'}}>
        <pre> {JSON.stringify({lessons, errors}, null, 2)} </pre>
        <Form  onSubmit={handleSubmit} style={{borderRadius: '10px'}} >
        <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium', color: '#000000'}}>New Lesson Form</h1>
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#000000'}}>Lesson Title</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#000000'}} type="text" value={title} onChange={(e) => setTitle(e.target.value)}  />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#000000'}}>Description</Form.Text>
                <Form.Control type="text" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#000000'}} value={description} as='textarea' onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#000000'}}>Duration(minutes)</Form.Text>
                <Form.Control type="integer" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#000000'}} value={duration} onChange={(e) => setDuration(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#000000'}}>Content</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', color: '#000000', fontFamily:'DMSans'}}  value={content} onChange={(e) => setContent(e.target.value)} />
                {content && (<ReactPlayer url={content} controls={true} width="100%"/>)}
            </Form.Group>
            <br />
        <Form.Group align='middle'><Button className='border-0' style={{backgroundColor: '#333333'}}type='submit'>Add</Button></Form.Group>
        </Form>
      </div>
  )
}
