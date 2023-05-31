import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BiMessageSquareError} from 'react-icons/bi'




export default function NewCourseForm({setCourses, currentUser}) {
  const [thumbnail_img, setThumbnailImg] = useState("")
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
      thumbnail_img: thumbnail_img,
      title: title,
      description: description,
      price: price,
      category: category,
      difficulty: difficulty,
      instructor_id: currentUser.id
  }

  fetch("/api/courses", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
  })
  // .then(resp => resp.json())
  .then(res => {
      if(res.status === 201) {
      fetch("/api/courses")
      .then((r) => r.json())
      .then((data) => setCourses(data))
      alert("Course Successfully Created!")
      navigate('/')
  } else {
    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
  }
  });
  // navigate("/posts")
}



if(errors) {return  <> <div className="d-flex justify-content-center" style={{backgroundColor:'#0c3954'}}>
<Form className="p-5 rounded shadow-lg" onSubmit={handleSubmit} style={{width: '80%', border: "2px solid #ccc", borderRadius: '10px',
padding: '20px'}} > <x-large style={{color: '#f5f5f5', fontFamily: 'poppinsBold'}}><BiMessageSquareError/> {errors.map((error, index) => (
  <div key={index} style={{ margin: '10px 0' }}>
    {error}
  </div>
))} </x-large>
<h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium', color: '#fafafa'}}>Register New Course</h1>
    <Form.Group>
        <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Thumbnail Image</Form.Text>
        <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} type="text" placeholder='Image url' value={thumbnail_img} onChange={(e) => setThumbnailImg(e.target.value)}  />
        {thumbnail_img && <img src={thumbnail_img} alt="Thumbnail" />}
    </Form.Group>
    <br />
    <Form.Group>
        <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Course Title</Form.Text>
        <Form.Control type="text" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} value={title} placeholder='Course Name (must be more than 5 characters)'onChange={(e) => setTitle(e.target.value)}/>
    </Form.Group>
    <br />
    <Form.Group>
        <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Description</Form.Text>
        <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} as="textarea" placeholder='Please provide an overview of what the course covers' value={description} onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>
    <br />
    <Form.Group>
        <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Price($0 - $100)</Form.Text>
        <Form.Control style={{backgroundColor: 'transparent', color: '#fafafa', fontFamily:'DMSans'}} aria-label="Amount (to the nearest dollar)" value={price} onChange={(e) => setPrice(e.target.value)} />
    </Form.Group>
    <br />
<Form.Group>
<Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Category</Form.Text>
<Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} as="select" value={category} onChange={handleChange}>
  <option value="">Please select a category</option>
  <option value="Language" >Language</option>
  <option value="Technology and IT">Technology and IT</option>
  <option value="Personal development and growth">Personal development and growth</option>
  <option value="Health and Wellness">Health and Wellness</option>
  <option value="Education and Teaching">Education and Teaching</option>
  <option value="Science and Math">Science and Math</option>
  <option value="Social Sciences and Humanities">Social Sciences and Humanities</option>
  <option value="Environmental Sustainability">Environmental Sustainability</option>
  <option value="Arts and Design">Arts and Design</option>
  <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
</Form.Control>
<br />
</Form.Group>  
{['radio'].map((type) => (
  <div key={`inline-${type}`} className="mb-3"  style={{color: '#fafafa', fontFamily:'DMSans', fontSize: '1.0em'}}>
<Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Difficulty</Form.Text>
  <br />
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
</div> </> 
}
else {
    return (
      <div className="d-flex justify-content-center" style={{backgroundColor:'#0c3954'}}>
        <Form className="p-5 rounded shadow-lg" onSubmit={handleSubmit} style={{width: '80%', border: "2px solid #ccc", borderRadius: '10px',
  padding: '20px'}} >
        <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium', color: '#fafafa'}}>Register New Course</h1>
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Thumbnail Image</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} type="text" placeholder='Image url' value={thumbnail_img} onChange={(e) => setThumbnailImg(e.target.value)}  />
                {thumbnail_img && <img src={thumbnail_img} alt="Thumbnail" />}
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Course Title</Form.Text>
                <Form.Control type="text" style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} value={title} placeholder='Course Name (must be more than 5 characters)'onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Description</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} as="textarea" placeholder='Please provide an overview of what the course covers' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Price($0 - $100)</Form.Text>
                <Form.Control style={{backgroundColor: 'transparent', color: '#fafafa', fontFamily:'DMSans'}} aria-label="Amount (to the nearest dollar)" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <br />
        <Form.Group>
        <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Category</Form.Text>
        <Form.Control style={{backgroundColor: 'transparent', fontFamily:'DMSans', color: '#fafafa'}} as="select" value={category} onChange={handleChange}>
          <option value="">Please select a category</option>
          <option value="Language" >Language</option>
          <option value="Technology and IT">Technology and IT</option>
          <option value="Personal development and growth">Personal development and growth</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Education and Teaching">Education and Teaching</option>
          <option value="Science and Math">Science and Math</option>
          <option value="Social Sciences and Humanities">Social Sciences and Humanities</option>
          <option value="Environmental sustainability">Environmental sustainability</option>
          <option value="Art and Design">Art and Design</option>
          <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
        </Form.Control>
        <br />
      </Form.Group>  
    {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3"  style={{color: '#fafafa', fontFamily:'DMSans', fontSize: '1.0em'}}>
        <Form.Text style={{fontSize: '1.2em', fontFamily: 'DMSans', color: '#fafafa'}}>Difficulty</Form.Text>
          <br />
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
      </div>
    )}
}
