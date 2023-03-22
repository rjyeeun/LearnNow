import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



export default function NewCourseForm({setCourses, currentUser}) {
  const [thumnailImg, setThumnailImg] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const navigate = useNavigate()
 
  function handleChange(e) {
  setCategory(e.target.value);
}

function handleSelect(e) {
  setDifficulty(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();

  const newCourse = {
      thumnailImg: thumnailImg,
      title: title,
      description: description,
      price: price,
      category: category,
      difficulty: difficulty,
      instructor_id: currentUser.id
  }

  console.log(newCourse)


  fetch("/courses", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
  })
  // .then(resp => resp.json())
  .then(res => {
      if(res.status === 201) {
      fetch("/courses")
      .then((r) => r.json())
      .then((data) => setCourses(data))
      
      navigate('/')
  } else {
      res.json().then((errorData)=> alert(errorData.errors))
      // res.json().then((errorData)=> alert(errorData.error))
      }
  });
  // navigate("/posts")
}
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
                <InputGroup.Text>Thumbnail Image</InputGroup.Text>
                <Form.Control type="text" value={thumnailImg} onChange={(e) => setThumnailImg(e.target.value)}  />
            </Form.Group>
            <Form.Group>
                <InputGroup.Text>Title</InputGroup.Text>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control as="textarea" controlId="htmlFor" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <InputGroup.Text>Price($0 - $100)</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
        <Form.Group>
        <InputGroup.Text>Category</InputGroup.Text>
        <Form.Control as="select" value={category} onChange={handleChange}>
          <option value="language" >Language</option>
          <option value="IT">IT</option>
          <option value="Cooking">Cooking</option>
          <option value="Health and Wellness">Health and Wellness</option>
        </Form.Control>
      </Form.Group>  
    {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
        <InputGroup.Text>Difficulty</InputGroup.Text>
          <Form.Check
            inline
            label="Basic"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            value="Basic"
            onChange={(e)=> handleSelect(e)}
          />
          <Form.Check
            inline
            label="Intermediate"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            value="Intermediate"
            onChange={(e)=> handleSelect(e)}
          />
          <Form.Check
            inline
            label="Advanced"
            type={type}
            id={`inline-${type}-3`}
            value="Advanced"
            onChange={(e)=> handleSelect(e)}
          />
        </div>
      ))}
        <Button type='submit'>Create Course</Button>
        </Form>
    )
}
