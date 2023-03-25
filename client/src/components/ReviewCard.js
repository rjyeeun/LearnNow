import React from 'react';
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

export default function ReviewCard({review, course}) {
    const {user_id, content, rating} = review;
    const [username, setUsername] = useState('');

    useEffect(()=> {
        fetch(`/users/${user_id}`)
        .then(r => r.json())
        .then((data) => {
            setUsername(data.username.charAt(0).toUpperCase() + data.username.slice(1));
        });
    }, [])

   
    const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
            );
        }

    return (
        <Card className="mb-3">
        <Card.Body>
            <Card.Title>{username} {stars}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </Card.Body>
        </Card>
    );
}
