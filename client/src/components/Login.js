import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login({handleUserLogin}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      mode:"cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "email":email, "password":password })
    })
      .then(res => {
        if(res.ok) {
          res.json().then(user => handleUserLogin(user))
          .then(()=> navigate('/'))
        } else {
          res.json().then((errorData)=> alert("Invalid username or password"))
        }
      })
    setPassword('');
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
     <Form className="p-5 rounded shadow-lg" style={{backgroundColor:'#9ccbd5'}}>
       <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium'}}>LOGIN</h1>
       <h6 className="mb-3 text-center" style={{fontFamily: 'PoppinsRegular'}}><Link style={{textDecoration: 'none', color: 'black'}} to={`/signup`}>Don't have an accout? Sign up and join today! </Link></h6>
       <Form.Group style={{fontFamily: 'DMSans'}} className="mb-3"></Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={ (e) => setEmail(e.target.value) } />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={ (e) => setPassword(e.target.value) }  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
    </div>
  )
}
