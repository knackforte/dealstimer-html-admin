import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../Auth/Auth';
const MenuContent = () => {
    return (
        <div data-scroll-to-active="true" className="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
            <div className="main-menu-header">
                <input type="text" placeholder="Search" className="menu-search form-control round" /></div>
            <div
                className="main-menu-content ps-container ps-theme-light ps-active-y"
                data-ps-id="bb7636f9-f9e8-9c61-4222-cb3f33f23d3f">
                <ul
                    id="main-menu-navigation"
                    data-menu="menu-navigation"
                    className="navigation navigation-main">
                    <li className="nav-item dashboard">
                        <Link to="/dashboard">
                            <i className="icon-stats-bars"></i>
                            <span data-i18n="" className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item has-sub products">
                        <Link to="#">
                            <i className="icon-ios-box"></i>
                            <span data-i18n="" className="menu-title">Products</span>

                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link
                                    to="/products/all"
                                    data-i18n=""
                                    className="menu-item">All Products
                        </Link>
                            </li>
                            <li className="">
                                <Link
                                    to="/products/new"
                                    data-i18n=""
                                    className="menu-item">Add New</Link>
                            </li>
                            <li className="">
                                <Link
                                    to="/products/attributes"
                                    data-i18n=""
                                    className="menu-item">Attrbutes</Link>
                            </li>
                            <li className="">
                                <Link
                                    to="/products/categories"
                                    data-i18n=""
                                    className="menu-item">Categories</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-sub Packages ">
                        <Link to="#">
                            <i className="icon-box"></i>
                            <span data-i18n="" className="menu-title">Packages</span>
                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link to="/packages/all" data-i18n="" className="menu-item">All Packages</Link>
                            </li>
                            <li className="">
                                <Link to="/packages/new" data-i18n="" className="menu-item">Add New</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-sub coupons">
                        <Link to="#">
                            <i className="icon-ios-pricetag"></i>
                            <span data-i18n="" className="menu-title">Coupons</span>

                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link to="/coupons/all" data-i18n="" className="menu-item">All Coupons</Link>
                            </li>
                            <li className="">
                                <Link to="/coupons/new" data-i18n="" className="menu-item">Add New</Link>
                            </li>
                            <li className="">
                                <Link to="/coupons/deal-tags" data-i18n="" className="menu-item">Deal Tags</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-sub search-and-sort">
                        <Link to="#">
                            <i className="icon-search"></i>
                            <span data-i18n="" className="menu-title">Search and Sort</span>

                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link to="/search-and-sort/websites" data-i18n="" className="menu-item">Websites</Link>
                            </li>
                            <li className="">
                                <Link to="/search-and-sort/ads" data-i18n="" className="menu-item">Ads</Link>
                            </li>
                            <li className="">
                                <Link to="/search-and-sort/products" data-i18n="" className="menu-item">Products</Link>
                            </li>
                            <li className="">
                                <Link to="/search-and-sort/companies" data-i18n="" className="menu-item">Companies</Link>
                            </li>
                            <li className="">
                                <Link to="/search-and-sort/attributes" data-i18n="" className="menu-item">Attributes</Link>
                            </li>
                            <li className="">
                                <Link to="/search-and-sort/logs" data-i18n="" className="menu-item">Logs</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item subscriptions">
                        <Link to="/subscriptions">
                            <i className="icon-circle-check"></i>
                            <span data-i18n="" className="menu-title">Subscriptions</span>
                        </Link>
                    </li>
                    <li className="nav-item has-sub comments-and-ratings">
                        <Link to="#">
                            <i className="icon-comment"></i>
                            <span data-i18n="" className="menu-title">Comments and Ratings</span>

                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link to="/comments-and-ratings/comments" data-i18n="" className="menu-item">Comments</Link>
                            </li>
                            <li className="">
                                <Link to="/comments-and-ratings/reviews" data-i18n="" className="menu-item">Reviews</Link>
                            </li>
                            <li className="">
                                <Link to="/comments-and-ratings/ratings" data-i18n="" className="menu-item">Ratings</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-sub Wallet">
                        <Link to="#">
                            <i className="icon-wallet"></i>
                            <span data-i18n="" className="menu-title">Wallet</span>

                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link to="/wallet/payments" data-i18n="" className="menu-item">Payments</Link>
                            </li>
                            <li className="">
                                <Link to="/wallet/receivings" data-i18n="" className="menu-item">Receivings</Link>
                            </li>
                            <li className="">
                                <Link to="/wallet/ratings" data-i18n="" className="menu-item">Ratings</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-sub user-management">
                        <Link to="#">
                            <i className="icon-users"></i>
                            <span data-i18n="" className="menu-title">Users Management</span>

                        </Link>
                        <ul className="menu-content">
                            <li className="">
                                <Link to="/users/all" className="menu-item">All Users</Link>
                            </li>
                            <li className="">

                                <Link to="/users/new" className="menu-item">Add New Vendor</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item settings">
                        <Link to="/settings">
                            <i className="icon-ios-settings"></i>
                            <span data-i18n="" className="menu-title">Settings</span>
                        </Link>
                    </li>
                </ul>
                <div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}>
                    <div className="ps-scrollbar-x" tabIndex="0" style={{ left: '0px', width: '0px' }}></div>
                </div>
                <div
                    className="ps-scrollbar-y-rail" style={{ top: '0px', height: '242px', right: '3px' }}>
                    <div className="ps-scrollbar-y" tabIndex="0" style={{ top: '0px', height: '61px' }}></div>
                </div>
            </div>

        </div>
    );
};

const EmptyContent = () => {
    return (
        <div></div>
    );
}

const MainMenu = (props) => {

    let MainMenuContent;
    if (auth.isAuthenticated() === "true") {
        MainMenuContent = MenuContent;
    } else {
        MainMenuContent = EmptyContent;
    }

    return (
        < MainMenuContent {...props} />
    )
}
export default withRouter(MainMenu);