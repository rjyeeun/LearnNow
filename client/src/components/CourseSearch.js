import React from 'react'

export default function CourseSearch({searchCourse, changeSearch}) {

    const handleChange = (e) => {
        changeSearch(e.target.value)
    }
  return (
    <input class="form-control me-2" type="search" placeholder="What do you want to learn about?" aria-label="Search" onChange={handleChange}/>
  )
}
