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
import Settings from './components/Admin/Settings'
class App extends React.Component {
  render() {

    return (
      <div className='Admin'>

      </div>
    )
  }
}

export default App;
