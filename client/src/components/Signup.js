

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'


export default function Signup() {
 const [name, setName] = useState("");
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const [errors, setErrors] = useState(false)


 function handleSignUp(e) {
   e.preventDefault();
   fetch("/api/users", {
     method: "POST",
     mode: "cors",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({"username": username, "email": email, "password":password, "name":name})
   })
   .then(res => res.json())
   .then(data => {
     if (data.errors) {
       setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`));
     } else {
       alert("Sign up successful, please log in");
       navigate('/login');
     }
   })
   .catch(error => console.log(error));
 }

 if(errors) {return <div className="d-flex justify-content-center align-items-center vh-100">
     <Form className="p-5 rounded shadow-lg" style={{backgroundColor:'#9ccbd5'}}>
       <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium'}}>Create New Account</h1>
       <h6 className="mb-3 text-center" style={{fontFamily: 'PoppinsRegular'}}><Link style={{textDecoration: 'none', color: 'black'}} to={`/login`}>Already Registered? Login </Link></h6>
       <Form.Group style={{fontFamily: 'DMSans'}} className="mb-3">
         <Form.Label>Full Name</Form.Label>
         <Form.Control
           type="text"
           value={name}
           placeholder="Enter Full Name"
           onChange={(e) => setName(e.target.value)}
           required
         />
       </Form.Group>
       <Form.Group className="mb-3">
         <Form.Label>Username</Form.Label>
         <Form.Control
           type="text"
           value={username}
           placeholder="Enter Username"
           onChange={(e) => setUsername(e.target.value)}
           required
         />
       </Form.Group>
       <Form.Group className="mb-3">
         <Form.Label>Email address</Form.Label>
         <Form.Control
           type="email"
           value={email}
           placeholder="Enter Email"
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </Form.Group>
       <Form.Group className="mb-3">
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           value={password}
           placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
           required
         />
       </Form.Group>
       <small className="text-muted">{errors}</small>
       <br />
       <Form.Group align='middle'>
       <Button variant="dark" type="submit" onClick={handleSignUp}>
         JOIN
       </Button>
       </Form.Group>
     </Form>
   </div> }


 return (
   <div className="d-flex justify-content-center align-items-center vh-100">
     <Form className="p-5 rounded shadow-lg" style={{backgroundColor:'#9ccbd5'}}>
       <h1 className="mb-3 text-center" style={{fontFamily: 'PoppinsMedium'}}>Create New Account</h1>
       <h6 className="mb-3 text-center" style={{fontFamily: 'PoppinsRegular'}}><Link style={{textDecoration: 'none', color: 'black'}} to={`/login`}>Already Registered? Login </Link></h6>
       <Form.Group style={{fontFamily: 'DMSans'}} className="mb-3">
         <Form.Label>Full Name</Form.Label>
         <Form.Control
           type="text"
           value={name}
           placeholder="Enter Full Name"
           onChange={(e) => setName(e.target.value)}
           required
         />
       </Form.Group>
       <Form.Group className="mb-3">
         <Form.Label>Username</Form.Label>
         <Form.Control
           type="text"
           value={username}
           placeholder="Enter Username"
           onChange={(e) => setUsername(e.target.value)}
           required
         />
       </Form.Group>
       <Form.Group className="mb-3">
         <Form.Label>Email address</Form.Label>
         <Form.Control
           type="email"
           value={email}
           placeholder="Enter Email"
           onChange={(e) => setEmail(e.target.value)}
           required
         />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>
       <Form.Group className="mb-3">
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           value={password}
           placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
           required
         />
       </Form.Group>
       <Form.Group align='middle'>
       <Button variant="dark" type="submit" onClick={handleSignUp} block>
         JOIN
       </Button>
       </Form.Group>
     </Form>
   </div>
 );
}
