import React,{ Component } from 'react'


class Varify extends Component{
    render () {
      return (
         <div className="varify">
             <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">{'{'}{'{'} __('Verify Your Email Address') {'}'}{'}'}</div>
        <div className="card-body">
          @if (session('resent'))
          <div className="alert alert-success" role="alert">
            {'{'}{'{'} __('A fresh verification link has been sent to your email address.') {'}'}{'}'}
          </div>
          @endif
          {'{'}{'{'} __('Before proceeding, please check your email for a verification link.') {'}'}{'}'}
          {'{'}{'{'} __('If you did not receive the email') {'}'}{'}'}, <a href="{{ route('verification.resend') }}">{'{'}{'{'} __('click here to request another') {'}'}{'}'}</a>.
        </div>
      </div>
    </div>
  </div>
</div>


         </div>
      );
    }
  };



  export default Varify;

