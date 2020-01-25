import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Auth';
// Images
import dealstimer from '../../assets/images/dealstimer.png';
import avatar_s_one from '../../app-assets/images/portrait/small/avatar_s_one.png';
import avatar_s_2 from '../../app-assets/images/portrait/small/avatar_s_one.png';
import avatar_s_3 from '../../app-assets/images/portrait/small/avatar_s_one.png';
import avatar_s_6 from '../../app-assets/images/portrait/small/avatar_s_one.png';

const NavbarContent = (props) => {
  return (
    <nav className="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-semi-dark navbar-shadow">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li className="nav-item mobile-menu hidden-md-up float-xs-left"><a className="nav-link nav-menu-main menu-toggle hidden-xs is-active"><i className="icon-menu5 font-large-1" /></a></li>
            <li className="nav-item">
              <Link to="/dashboard" className="navbar-brand nav-link">
                {/* <h3 className="font-weight-bold white branding logo" style={{color: '#37BC9B !important'}}>DASHBOARD</h3>  */}
                <img alt="" src={dealstimer} data-expand={dealstimer} data-collapse className="brand-logo" style={{ maxWidth: '100%' }} />
                {/* <img alt="branding logo" src={dealstimer} data-expand={dealstimer} data-collapse="{{asset('')}}" className="brand-logo"  */}
              </Link>
            </li>
            <li className="nav-item hidden-md-up float-xs-right"><a data-toggle="collapse" data-target="#navbar-mobile" className="nav-link open-navbar-container"><i className="icon-ellipsis pe-2x icon-icon-rotate-right-right" /></a></li>
          </ul>
        </div>
        <div className="navbar-container content container-fluid">
          <div id="navbar-mobile" className="collapse navbar-toggleable-sm">
            <ul className="nav navbar-nav">
              <li className="nav-item hidden-sm-down"><a className="nav-link nav-menu-main menu-toggle hidden-xs is-active"><i className="icon-menu5" /></a></li></ul>
            <ul className="nav navbar-nav float-xs-right">
              <li className="dropdown dropdown-language nav-item"><Link id="dropdown-flag" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link"><i className="flag-icon flag-icon-gb" /><span className="selected-language">English</span></Link>
                <div aria-labelledby="dropdown-flag" className="dropdown-menu">
                  <Link to="#" className="dropdown-item"><i className="flag-icon flag-icon-gb" /> English</Link>
                  <Link to="#" className="dropdown-item"><i className="flag-icon flag-icon-ua" /> Arabic</Link>
                </div>
              </li>
              <li className="dropdown dropdown-notification nav-item"><Link to="#" data-toggle="dropdown" className="nav-link nav-link-label"><i className="ficon icon-bell4" /><span className="tag tag-pill tag-default tag-danger tag-default tag-up">5</span></Link>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0"><span className="grey darken-2">Notifications</span><span className="notification-tag tag tag-default tag-danger float-xs-right m-0">5 New</span></h6>
                  </li>
                  <li className="list-group scrollable-container ps-container ps-theme-dark ps-active-y" data-ps-id="cba06368-a5b9-9a3a-4394-276f483e7827"><Link to="#" className="list-group-item">
                    <div className="media">
                      <div className="media-left valign-middle"><i className="icon-cart3 icon-bg-circle bg-cyan" /></div>
                      <div className="media-body">
                        <h6 className="media-heading">You have new order!</h6>
                        <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p><small>
                          <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">30 minutes ago</time></small>
                      </div>
                    </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle"><i className="icon-monitor3 icon-bg-circle bg-red bg-darken-1" /></div>
                        <div className="media-body">
                          <h6 className="media-heading red darken-1">99% Server load</h6>
                          <p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Five hour ago</time></small>
                        </div>
                      </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle"><i className="icon-server2 icon-bg-circle bg-yellow bg-darken-3" /></div>
                        <div className="media-body">
                          <h6 className="media-heading yellow darken-3">Warning notifixation</h6>
                          <p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Today</time></small>
                        </div>
                      </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle"><i className="icon-check2 icon-bg-circle bg-green bg-accent-3" /></div>
                        <div className="media-body">
                          <h6 className="media-heading">Complete the task</h6><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Last week</time></small>
                        </div>
                      </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left valign-middle"><i className="icon-bar-graph-2 icon-bg-circle bg-teal" /></div>
                        <div className="media-body">
                          <h6 className="media-heading">Generate monthly report</h6><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Last month</time></small>
                        </div>
                      </div></Link><div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps-scrollbar-y-rail" style={{ top: '0px', height: '280px', right: '3px' }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: '0px', height: '207px' }} /></div></li>
                  <li className="dropdown-menu-footer"><Link to="#" className="dropdown-item text-muted text-xs-center">Read all notifications</Link></li>
                </ul>
              </li>
              <li className="dropdown dropdown-notification nav-item"><Link to="#" data-toggle="dropdown" className="nav-link nav-link-label"><i className="ficon icon-mail6" /><span className="tag tag-pill tag-default tag-info tag-default tag-up">8</span></Link>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0"><span className="grey darken-2">Messages</span><span className="notification-tag tag tag-default tag-info float-xs-right m-0">4 New</span></h6>
                  </li>
                  <li className="list-group scrollable-container ps-container ps-theme-dark ps-active-y" data-ps-id="f42f5248-81d2-f922-f64f-de65dc0602d0"><Link to="#" className="list-group-item">
                    <div className="media">
                      <div className="media-left"><span className="avatar avatar-sm avatar-online rounded-circle"><img src={avatar_s_one} alt="avatar" /><i /></span></div>
                      <div className="media-body">
                        <h6 className="media-heading">Margaret Govan</h6>
                        <p className="notification-text font-small-3 text-muted">I like your portfolio, let's start the project.</p><small>
                          <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Today</time></small>
                      </div>
                    </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left"><span className="avatar avatar-sm avatar-busy rounded-circle"><img src={avatar_s_2} alt="avatar" /><i /></span></div>
                        <div className="media-body">
                          <h6 className="media-heading">Bret Lezama</h6>
                          <p className="notification-text font-small-3 text-muted">I have seen your work, there is</p><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Tuesday</time></small>
                        </div>
                      </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left"><span className="avatar avatar-sm avatar-online rounded-circle"><img src={avatar_s_3} alt="avatar" /><i /></span></div>
                        <div className="media-body">
                          <h6 className="media-heading">Carie Berra</h6>
                          <p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Friday</time></small>
                        </div>
                      </div></Link><Link to="#" className="list-group-item">
                      <div className="media">
                        <div className="media-left"><span className="avatar avatar-sm avatar-away rounded-circle"><img src={avatar_s_6} alt="avatar" /><i /></span></div>
                        <div className="media-body">
                          <h6 className="media-heading">Eric Alsobrook</h6>
                          <p className="notification-text font-small-3 text-muted">We have project party this saturday night.</p><small>
                            <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">last month</time></small>
                        </div>
                      </div></Link><div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps-scrollbar-y-rail" style={{ top: '0px', height: '280px', right: '3px' }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: '0px', height: '236px' }} /></div></li>
                  <li className="dropdown-menu-footer"><Link to="#" className="dropdown-item text-muted text-xs-center">Read all messages</Link></li>
                </ul>
              </li>
              <li className="dropdown dropdown-user nav-item"><Link to="#" data-toggle="dropdown" className="dropdown-toggle nav-link dropdown-user-link"><span className="avatar avatar-online"><img src={avatar_s_one} alt="avatar" /><i /></span><span className="user-name">John Doe</span></Link>
                <div className="dropdown-menu dropdown-menu-right"><Link to="#" className="dropdown-item"><i className="icon-head" /> Edit Profile</Link><Link to="#" className="dropdown-item"><i className="icon-mail6" /> My Inbox</Link><Link to="#" className="dropdown-item"><i className="icon-clipboard2" /> Task</Link><Link to="#" className="dropdown-item"><i className="icon-calendar5" /> Calender</Link>
                  <div className="dropdown-divider" /><a className="dropdown-item" onClick={props.logout}><i className="icon-power3" /> Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const EmptyContent = () => {
  return (
    <div></div>
  );
}

const Navbar = (props) => {

  const handleLogout = () => {
    localStorage.setItem('isAuth', false);
    props.history.push("/");
  }

  let NavContent;
  if (isAuthenticated() === "true") {
    NavContent = NavbarContent;
  } else {
    NavContent = EmptyContent;
  }

  return (
    <NavContent logout={handleLogout} {...props} />

  );
}

export default withRouter(Navbar);