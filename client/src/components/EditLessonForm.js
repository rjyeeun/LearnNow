import React, {useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactPlayer from 'react-player';

export default function EditLessonForm({lesson, onEditLesson}) {
  const {id, course_id} = lesson
  const initialFormValues = {
    title: lesson.title,
    description: lesson.description,
    content: lesson.content,
    duration:lesson.duration,
    course_id: lesson.course_id
}

const [ formData, setFormData] = useState(initialFormValues)


const { title, description, content, duration} = formData

const handleFormData = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

function handleEditFormSubmit(e) {
  e.preventDefault()

  const requestObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  }
fetch(`/api/courses/${course_id}/lessons/${id}`, requestObj)
      .then(response => response.json())
      .then(() => { onEditLesson(formData) 
        setFormData(initialFormValues)})
      .then(alert('edit successfully'))
      window.location.reload()
}



  return (
    <div style={{backgroundColor:' #9ccbd5', padding: '3em'}}>
        <Form onSubmit={handleEditFormSubmit}>
        <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium', color: '#fafafa'}}>Edit Lesson</h1>
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Lesson Title</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} type="text" name='title' value={title} onChange={handleFormData}  />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Description</Form.Text>
                <Form.Control type="text" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} name='description' value={description} as='textarea' onChange={handleFormData}/>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Duration(minutes)</Form.Text>
                <Form.Control type="integer" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} name='duration' value={duration} onChange={handleFormData} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Content</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', color: '#fafafa', fontFamily:'DMSans'}}  value={content} name='content' onChange={handleFormData} />
                {content && (<ReactPlayer url={content} controls={true} width="100%"/>)}
            </Form.Group>
            <br />
        <Form.Group align='middle'><Button type='submit'>Update Lesson</Button></Form.Group>
        </Form>
      </div>
  )
}
