import React from 'react';
 
class Main extends Component{
  render()
  {
    return(
<div clasName="main">
<main class="py-4">
            @yield('content')
        </main>


</div>
 
 
    )
  }
}

export default Main;
