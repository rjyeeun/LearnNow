import React, {useEffect, useState} from 'react'
import EnrolledCourseLists from './EnrolledCourseLists';
import {Link, useNavigate} from 'react-router-dom';
import {Button , Card, Form} from 'react-bootstrap';
import profileIcon from './profileIcon.png'

export default function UserDashboard({currentUser, onDeleteUser, onEditUserProfile, courses, currentEnrolledCourse, setCurrentEnrolledCourse, onDeleteCurrentEnrolledCourse}) {
  const {id, enrolled_courses} = currentUser
  const [editFormIsOpen, setEditFormIsOpen] = useState(false)
  const navigate = useNavigate()
  const initialFormValues = {
    name: currentUser.name,
    email:currentUser.email,
    username:currentUser.username,
    password:currentUser.password
}

const [ formData, setFormData] = useState(initialFormValues)

const { name, username, email, password } = formData

const handleFormData = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}
async function handleEditFormSubmit(e) {
  e.preventDefault()
  setEditFormIsOpen(false)

  const requestObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  }

await fetch(`users/${currentUser.id}`, requestObj)
      .then(response => response.json())
      .then(() => {
          onEditUserProfile(formData)
          //setFormData(initialFormValues)
          // setEditFormIsOpen(false) 
          navigate("/dashboard")
          window.location.reload();
      })


}
const editForm = (
  <form className='edit-profile-form' onSubmit={handleEditFormSubmit}>
      <input type="text" placeholder="name" name="name" value={name} onChange={handleFormData}/>
      <br />
      <input type="text" placeholder="username" name="username" value={username} onChange={handleFormData}/>
      <br />
      <input required type='password' placeholder="password" name="password" value={password} onChange={handleFormData}/>
      <br />
      <button type="button" className="cancel-button" onClick={() => setEditFormIsOpen(false)}>Cancel</button>
      <button type="submit">Save</button>
  </form>
)

const editButton = <button onClick={()=> setEditFormIsOpen(true)}>Edit</button>
console.log(currentUser)
async function deleteAccount() {
    let user_id = currentUser.id

    await fetch("/logout", {
        method: "DELETE",
        mode:"cors",
        headers: {
        "Content-Type": "application/json"
        }
    })

    if (user_id) {
        fetch(`users/${user_id}`,
        { method: 'DELETE'})
        .then(() => onDeleteUser(id))
        alert("your account has been deactivated")
    }

    navigate("/")
    window.location.reload();
}

  const enrolled_courses_array = enrolled_courses.map(enrolledCourse => 
    <Link style={{ textDecoration: 'none', color: 'black' }}  key={enrolledCourse.id} to ={`/enrolledcourse/${enrolledCourse.id}`} >
    <EnrolledCourseLists 
    currentUser={currentUser}
    enrolledCourse={enrolledCourse} 
    courses={courses}
    currentEnrolledCourse={currentEnrolledCourse}
    setCurrentEnrolledCourse={setCurrentEnrolledCourse}
    onDeleteCurrentEnrolledCourse={onDeleteCurrentEnrolledCourse} />
    </Link>);
  
  return (

    <div>
      <h1>Hello, {currentUser.name}</h1>
      <div className="max-w-max mx-auto">
                <div className='basic-box'>
                    <input type="file" accept='image/*' name="photo" id="profilePhotoInput" />
                    <label htmlFor="profilePhotoInput" className='max-w-max mx-auto'>
                        <div className="profile-photo" role="button" title="Click to edit photo">
                            <img src={profileIcon} alt="profile" />
                        </div>
                    </label>

                    <div className="profile-info">
                        <p className="name">{currentUser.name}</p>
                        <p className="username">@{currentUser.username}</p>
                        {/* <p>My Like Courses {currentUser.enrolled_courses.length}</p> */}
                        {editFormIsOpen ? editForm : editButton}
                        <button className="cancel-button" onClick={deleteAccount}> Deactivate </button>
                    </div>
                </div>
            </div>
    <div class="row row-cols-5 g-0">
      {enrolled_courses_array}
    </div>
    </div>
  )
}

// 1. post request 
// 2. create custom route in rails to get all users enrolled CourseS
// 3. make get request in user dashboard 

