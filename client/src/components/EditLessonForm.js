import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactPlayer from 'react-player';

export default function EditLessonForm() {
  const [course, setCourse] = useState({title: '', description: '', lessons: [], reviews: [], instructor_id: ''});
  const [lessons, setLessons] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const [errors, setErrors] = useState(false)
  const {id} = useParams()

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


useEffect(() => {
  fetch(`/courses/${id}/lessons`)
  .then( res => {
    if (res.ok) {
      res.json().then(data => {
        setLessons(data)
      });
    } else {
      console.log("error");
      res.json.then(data => setErrors(data.error))
    }
  })
}, [])

console.log(lessons)

// async function handleEditFormSubmit(e) {
//   e.preventDefault()

//   const requestObj = {
//       method: "PATCH",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//   }

// await fetch(`/courses/${course.id}/lessons/${id}`, requestObj)
//       .then(response => response.json())
//       .then(() => {
//           onEditUserProfile(formData)
//           //setFormData(initialFormValues)
//           // setEditFormIsOpen(false) 
//           history.push("/profile")
//           window.location.reload();
//       })


// }



  return (
    <div  class= 'd-flex justify-content-center' style={{backgroundColor:' #9ccbd5', padding: '3em'}}>
        <Form>
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
