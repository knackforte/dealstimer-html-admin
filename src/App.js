import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import MainMenu from './components/Common/MainMenu';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DashBoard2 from './components/Admin/dashboard/DashBoard2';
import Users from './components/Admin/Users/users';
import New from './components/Admin/Users/new';
import Profile from './components/Admin/Users/profile';
import Login from './components/Layouts/Login';
class App extends React.Component{
  render()
  {
    const auth = true;
    return(
      // <div data-open="click" data-menu="vertical-menu" data-col="2-columns" class="vertical-layout vertical-menu 2-columns  fixed-navbar  menu-expanded pace-done">
      //   <Navbar />
      //   <Footer/>
      // </div>
      <div className='Admin'>
      { (auth) ? <Navbar/> : ""}
      {(auth)? <MainMenu/>:""}
        <BrowserRouter>
          <Route exact path='/' component={DashBoard2}></Route>
          <Route exact path='/login' component={(auth)?DashBoard2:Login}></Route>
          <Route path='/dashboard' component={DashBoard2}></Route>
          <Route exact path='/users' component={Users}/>
          <Route path='/users/new' component={New}/>
          <Route path='/users/profile' component={Profile}/>
        </BrowserRouter>
        {(auth)? <Footer/>: ""}
      </div>
    )
  }
}

export default App;
