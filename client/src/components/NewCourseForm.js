import React, {useState} from 'react'
import Header from './Header'

export default function NewCourseForm({setCourses}) {
    const [formData, setFormData] = React.useState(
        {
            title: "",
            description: "",
            price: "",
            category: "",
            difficulty: ""
        }
    )
  return (
    <div>NewCourseForm</div>
  )
}
