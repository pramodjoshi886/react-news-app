import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();
    const redirectToLogin =()=>{
        history.push('/login')
    }
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Enter Firstname" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter Lastname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={redirectToLogin} variant="primary" type="submit"> 
          Sign Up
        </Button>
      </Form>
      // to display registaion successful 
    );
}

export default Register
