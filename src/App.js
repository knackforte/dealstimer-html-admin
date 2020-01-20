import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import MainMenu from './components/Common/MainMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Admin/dashboard/Dashboard';
import Users from './components/Admin/Users/users';
import New from './components/Admin/Users/new';
import Profile from './components/Admin/Users/profile';
import Login from './components/Layouts/Login';
class App extends React.Component {
  render() {
    const auth = localStorage.getItem('isAuth');
    return (
      <div className='Admin'>
        {(auth === "true") ? <Navbar /> : ""}
        {(auth === "true") ? <MainMenu /> : ""}
        <BrowserRouter>
          <Route exact path='/' component={Login}></Route>
          <Route path='/login' component={(auth === "true") ? Dashboard : Login}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/users' component={Users} />
          <Route path='/users/new' component={New} />
          <Route path='/users/profile' component={Profile} />
        </BrowserRouter>
        {(auth === "true") ? <Footer /> : ""}
      </div>
    )
  }
}

export default App;
