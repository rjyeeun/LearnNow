import React from 'react'
import { useEffect, useState } from "react"

export default function ReviewCard({review}) {
    const {user_id, content} = review

    const [username, setUsername] = useState('')

    useEffect(()=> {
        fetch(`/users/${user_id}`)
        .then(r => r.json())
        .then((data) => {
        setUsername(data.username);
        })
    }, [])

    return (
        <div>
            <p>{username}</p>
            <p>{content}</p>
        </div>
    )
}
