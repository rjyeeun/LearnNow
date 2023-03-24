import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'



export default function NewCourseForm({setCourses, currentUser}) {
  const [thumbnailImg, setThumbnailImg] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const navigate = useNavigate()
  const [errors, setErrors] = useState(false)

 
  function handleChange(e) {
  setCategory(e.target.value);
}

function handleSelect(e) {
  setDifficulty(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();

  const newCourse = {
      thumbnailImg: thumbnailImg,
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
    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
  }
  });
  // navigate("/posts")
}



if(errors) {return <Form onSubmit={handleSubmit}>
<Form.Group controlId="formFile" className="mb-3">
    <InputGroup.Text>Thumbnail Image</InputGroup.Text>
    <Form.Control type="text" value={thumbnailImg} onChange={(e) => setThumbnailImg(e.target.value)}  />
</Form.Group>
<Form.Group>
    <InputGroup.Text>Title</InputGroup.Text>
    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
</Form.Group>
<small className="text-muted">{errors[0]}</small>
<Form.Group>
    <InputGroup.Text>Description</InputGroup.Text>
    <Form.Control as="textarea" controlId="htmlFor" value={description} onChange={(e) => setDescription(e.target.value)} />
</Form.Group>
<small className="text-muted">{errors[1]}</small>
<Form.Group>
    <InputGroup.Text>Price($0 - $100)</InputGroup.Text>
    <Form.Control aria-label="Amount (to the nearest dollar)" value={price} onChange={(e) => setPrice(e.target.value)} />
</Form.Group>
<small className="text-muted">{errors[2]}</small>
<Form.Group>
<InputGroup.Text>Category</InputGroup.Text>
<Form.Control as="select" value={category} onChange={handleChange}>
<option value="">Please select a category</option>
<option value="language" >Language</option>
<option value="IT">IT</option>
<option value="Cooking">Cooking</option>
<option value="Health and Wellness">Health and Wellness</option>
</Form.Control>
<small className="text-muted">{errors[3]}</small>
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
<small className="text-muted">{errors[4]}</small>
</div>
))}
<Button type='submit'>Create Course</Button>
</Form>
}
else {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
                <InputGroup.Text>Thumbnail Image</InputGroup.Text>
                <Form.Control type="text" value={thumbnailImg} onChange={(e) => setThumbnailImg(e.target.value)}  />
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
          <option value="">Please select a category</option>
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
    )}
}
