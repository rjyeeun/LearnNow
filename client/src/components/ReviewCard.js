import React from 'react';
import { useEffect, useState } from "react";
import {Button , Card, Form} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ReviewCard({review, course, currentUser, onDeleteReview}) {
    const {user_id, content, rating} = review;
    //const [reviewLists, setReviewLists] = useState({user_id: '', course_id: '', content: '', rating: ''})
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    // const onDeleteReview = (currentReviewId) => {
    //     const updatedReviewList = reviewLists.filter((review) => review.id !== currentReviewId)
    //     setReviewLists(updatedReviewList)
    // }

    useEffect(()=> {
        fetch(`/api/users/${user_id}`)
        .then(r => r.json())
        .then((data) => {
            setUsername(data.username.charAt(0).toUpperCase() + data.username.slice(1));
        });
    }, [])



    const deleteReview = () => {
        if (currentUser.id === user_id) {
        fetch(`/api/courses/${course.id}/reviews/${review.id}`,
        { method: 'DELETE'})
        .then(() => onDeleteReview(course.id))
        .then(alert("Review deleted successfully"))}
        navigate(`/enrolledcourse/${course.id}`)
        window.location.reload();
        } 

   
    const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
            );
        }

    return (
        <Card className="mb-3">
        <Card.Body style={{backgroundColor: '#9ccbd5'}}>
            <Card.Title>{username} {stars}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </Card.Body>
        <Card.Body className="border-0">
        {currentUser.id === review.user_id ? <Button style={{backgroundColor: '#ef2945'}} onClick={deleteReview}>Delete</Button> : null}
        </Card.Body>
        </Card>
    );
}
