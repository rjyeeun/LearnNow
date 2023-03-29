import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  comment: Yup.string().required('Comment is required'),
  rating: Yup.number()
    .typeError('Rating must be a number')
    .integer('Rating must be a whole number')
    .min(1, 'Rating must be between 1 and 5')
    .max(5, 'Rating must be between 1 and 5')
    .required('Rating is required'),
});

export default function NewReviewForm({ reviews, currentUser, course }) {
  const navigate = useNavigate();
  const initialComment = ''
  const [comment, setComment] = useState(initialComment);
  const [rating, setRating] = useState(1);
  const [allReviews, setAllReviews] = useState([])
  const [errors, setErrors] = useState(false)
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  //get all reviews 
useEffect(()=> {
  fetch(`/courses/${course.id}/reviews`)
  .then(r => r.json())
  .then(data => {
    setAllReviews(data)
  })
}, [])


  function onSubmit(e) {
    e.preventDefault();
    const newReview = {
      content: comment,
      rating: rating,
      course_id: course.id,
      user_id: currentUser.id,
    };

    try {
    fetch(`/courses/${course.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
    .then(res => {
      if(res.status === 201) {
      fetch(`/courses/${course.id}/reviews`)
      .then((r) => r.json())
      .then((data) => setAllReviews(data))
      .then(() =>setComment(initialComment))
      window.location.reload();
  } else {
    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
  }
  })}
  catch (error){
    console.log(error.message);
}
  // navigate("/posts")
}

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group style={{fontFamily: 'poppinsMedium', fontSize: '1.5em'}}>Leave a review</Form.Group>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" placeholder="Enter your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            </Form.Group>
            <Form.Label style={{fontFamily: 'DMSansRegular'}}>Rating</Form.Label>
          <br />
            <Form.Group className='border-0'>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <Button
                    style={{backgroundColor: '#fafafa'}}
                    key={i}
                    onClick={() => setRating(ratingValue)}
                    className='border-0'
                  >
                    <i
                      className={
                        ratingValue <= rating
                          ? "fas fa-star text-warning"
                          : "far fa-star text-secondary"
                      }
                    ></i>
                  </Button>
                );
              })}
              </Form.Group>
              <br />
                          <Button style={{backgroundColor: "#9ccbd8"}} className='outline-0' type="submit" onClick={onSubmit}>Submit</Button>
                        </Form>
                      </Col>
                    </Row>
                    <br />
                  </Container>
                );
}

