import React from 'react';
 
class HomeBlade extends Component{
  render()
  {
    return(<div clasname="Home-Blade">
    @extends('layouts.app')
    @section('content')
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Dashboard</div>
            <div className="card-body">
              @if (session('status'))
              <div className="alert alert-success" role="alert">
                {'{'}{'{'} session('status') {'}'}{'}'}
              </div>
              @endif
              You are logged in!
            </div>
          </div>
        </div>
      </div>
    </div>
    @endsection
  </div>
    )
  }
}

export default HomeBlade;
