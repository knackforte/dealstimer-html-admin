import React from 'react';
import Navbar from './Navbar'
import Main from '.main'
 
class AppBlade extends Component{
  render()
  {
    return(
    <div clasName="app-blade">
        <Navbar />
        <Main />


    </div>
 
    )
  }
}

export default AppBlade;
