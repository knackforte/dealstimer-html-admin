import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import '../../app-assets/css/app.css';

class MainMenu extends Component {
    render()
    {
        return (
            <div data-scroll-to-active="true" className="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
                <div className="main-menu-header">
                    <input type="text" placeholder="Search" className="menu-search form-control round"/></div>
                    <div
                        className="main-menu-content ps-container ps-theme-light ps-active-y"
                        data-ps-id="bb7636f9-f9e8-9c61-4222-cb3f33f23d3f">
                        <ul
                            id="main-menu-navigation"
                            data-menu="menu-navigation"
                            className="navigation navigation-main">
                            <li className="nav-item dashboard  active ">
                                <a href="http://localhost/dealstimer-html/dashboard">
                                    <i className="icon-stats-bars"></i>
                                    <span data-i18n="" className="menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item has-sub products">
                                <a href="http://localhost/dealstimer-html/products">
                                    <i className="icon-ios-box"></i>
                                    <span data-i18n="" className="menu-title">Products</span>

                                </a>
                                <ul className="menu-content">
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products"
                                            data-i18n=""
                                            className="menu-item">All Products</a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products/add-new"
                                            data-i18n=""
                                            className="menu-item">Add New</a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products/manual-entry"
                                            data-i18n=""
                                            className="menu-item">Manual Entry</a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products/api-products"
                                            data-i18n=""
                                            className="menu-item">API Products</a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products/data-scrapping"
                                            data-i18n=""
                                            className="menu-item">Data Scrapping</a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products/attributes"
                                            data-i18n=""
                                            className="menu-item">Attrbutes</a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="http://localhost/dealstimer-html/products/categories"
                                            data-i18n=""
                                            className="menu-item">Categories</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item Packages ">
                                <a href="http://localhost/dealstimer-html/packages/packages">
                                    <i className="icon-box"></i>
                                    <span data-i18n="" className="menu-title">Packages</span>

                                </a>
                            </li>
                            <li className="nav-item has-sub coupons">
                                <a href="index.html">
                                    <i className="icon-ios-pricetag"></i>
                                    <span data-i18n="" className="menu-title">Coupons</span>

                                </a>
                                <ul className="menu-content">
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">All Coupons</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Add New</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Deal Tags</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-sub search-and-sort">
                                <a href="index.html">
                                    <i className="icon-search"></i>
                                    <span data-i18n="" className="menu-title">Search and Sort</span>

                                </a>
                                <ul className="menu-content">
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Websites</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Ads</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Products</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Companies</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Search Attributes</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Search Logs</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item subscriptions">
                                <a href="#">
                                    <i className="icon-circle-check"></i>
                                    <span data-i18n="" className="menu-title">Subscriptions</span>
                                </a>
                            </li>
                            <li className="nav-item has-sub comments-and-ratings">
                                <a href="index.html">
                                    <i className="icon-comment"></i>
                                    <span data-i18n="" className="menu-title">Comments and Ratings</span>

                                </a>
                                <ul className="menu-content">
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Comments</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Reviews</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Ratings</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-sub Wallet">
                                <a href="index.html">
                                    <i className="icon-wallet"></i>
                                    <span data-i18n="" className="menu-title">Wallet</span>

                                </a>
                                <ul className="menu-content">
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Payments</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Receivings</a>
                                    </li>
                                    <li className="">
                                        <a href="index.html" data-i18n="" className="menu-item">Ratings</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-sub user-management">
                                <a href="index.html">
                                    <i className="icon-users"></i>
                                    <span data-i18n="" className="menu-title">Users Management</span>

                                </a>
                                <ul className="menu-content">
                                    <li className="">
                                            <Link to={'/users'} className="menu-item">All Users</Link>
                                    </li>
                                    <li className="">
                                        
                                             <Link to={'/users/new'} className="menu-item">Add New Vendor</Link>
                                    </li>
                                    <li className="">
                                        
                                             <Link to={'/users/profile'} className="menu-item">Profile</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item settings">
                                <a href="#">
                                    <i className="icon-ios-settings"></i>
                                    <span data-i18n="" className="menu-title">Settings</span>
                                </a>
                            </li>
                        </ul>
                        <div className="ps-scrollbar-x-rail" style={{left: '0px',bottom: '3px'}}>
                            <div className="ps-scrollbar-x" tabIndex="0" style={{left: '0px', width: '0px'}}></div>
                        </div>
                        <div
                            className="ps-scrollbar-y-rail" style={{top: '0px', height: '242px', right: '3px'}}>
                            <div className="ps-scrollbar-y" tabIndex="0" style={{top: '0px',height: '61px'}}></div>
                        </div>
                    </div>

                </div>
        )
      }
    }
    export default MainMenu;