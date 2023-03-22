import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Signup() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate()
    function handleSignUp(e) {
      e.preventDefault();
      fetch("/users", {
          method: "POST",
          mode: "cors",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({"username": username, "email": email, "password":password, "name":name})
      })
      .then(res => {
          if(res.status === 201) {
              alert("Sign up successful, please log in")
              navigate('/login')
          } else {alert("Signup failed")}
      })
  }
    const history = useNavigate();
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Full Name" onChange= { (e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={username} placeholder="Enter Username" onChange= { (e) => setUsername(e.target.value)}/>
      </Form.Group>
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
      <Button variant="primary" type="submit" onClick={handleSignUp}>
        Join LearNow!
      </Button>
    </Form>
  )
}
