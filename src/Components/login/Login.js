import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../../App.css'
import {LoginService} from '../../Services/login.service'

function Login() {

  const history = useHistory();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const validate = (e) =>{
      if(!username){
        alert('Username should not be empty!')
        return false;
      }else if(!password){
        alert('Password should not be empty!')
        return false;
      }
      onclick(e);
  }

  const onclick = async (e) =>{
    e.preventDefault();
    try{
      let response = new LoginService().login(
        username,password
      );
      response.then((res)=>{
        console.log(res)
        //if(res.data.token)
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('username',username);
        history.push('/dashboard');
      }).catch((res)=>{
        alert(res.response.data.message)
      });
     
    }catch(e){
      console.log(e);
    }
  }

  const register = ()=>{
    history.push('/register')
  }
  
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={validate} variant="primary" type="submit">
        Login
      </Button>
      <p className="register" onClick={register}>Click here to Register</p>
    </Form>
  );
}

export default Login;