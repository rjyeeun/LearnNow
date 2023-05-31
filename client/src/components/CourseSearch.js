import React from 'react'


export default function CourseSearch({changeSearch}) {

    const handleChange = (e) => {
        changeSearch(e.target.value)
    }

  return (
<>
    <input className="form-control me-5" type="search" placeholder="What do you want to learn about?" aria-label="Search" onChange={handleChange}/>
 </>
  )
}
