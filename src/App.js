import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/dashboard/Dashboard';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import ReadNow from './Components/readNow/ReadNow';


class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/readNow" component={ReadNow}/>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>
     
    )   
  }
}
export default App;
