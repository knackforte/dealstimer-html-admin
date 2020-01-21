import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import MainMenu from './components/Common/MainMenu';
import Login from './components/Layouts/Login';
import Dashboard from './components/Admin/dashboard/Dashboard';
import UsersAll from './components/Admin/Users/UsersAll';
import UserAdd from './components/Admin/Users/UserAdd';
import UserEdit from './components/Admin/Users/UserEdit';
import CommentsAndRatingsComments from './components/Admin/CommentsAndRatings/Comments';
import CommentsAndRatingsRatings from './components/Admin/CommentsAndRatings/Ratings';
import CommentsAndRatingsReviews from './components/Admin/CommentsAndRatings/Reviews';
import CouponAdd from './components/Admin/Coupons/CouponAdd';
import CouponsAll from './components/Admin/Coupons/CouponsAll';
import CouponDealTags from './components/Admin/Coupons/CouponDealTags';
import CouponEdit from './components/Admin/Coupons/CouponEdit';
import PackageAdd from './components/Admin/Packages/PackageAdd';
import PackageEdit from './components/Admin/Packages/PackageEdit';
import PackagesAll from './components/Admin/Packages/PackagesAll';
import ProductAdd from './components/Admin/Products/ProductAdd';
import ProductAttributes from './components/Admin/Products/ProductAttributes';
import ProductCatagories from './components/Admin/Products/ProductCatagories';
import ProductEdit from './components/Admin/Products/ProductEdit';
import ProductsAll from './components/Admin/Products/ProductsAll';
import SearchAndSortAds from './components/Admin/SearchAndSort/SearchAndSortAds';
import SearchAndSortAttributes from './components/Admin/SearchAndSort/SearchAndSortAttributes';
import SearchAndSortCompanies from './components/Admin/SearchAndSort/SearchAndSortCompanies';
import SearchAndSortLogs from './components/Admin/SearchAndSort/SearchAndSortLogs';
import SearchAndSortProducts from './components/Admin/SearchAndSort/SearchAndSortProducts';
import SearchAndSortWebsites from './components/Admin/SearchAndSort/SearchAndSortWebsites';
import WalletPayments from './components/Admin/wallet/WalletPayments';
import WalletRatings from './components/Admin/wallet/WalletRatings';
import WalletReceivings from './components/Admin/wallet/WalletReceivings';
import Settings from './components/Admin/Settings';
import Subscriptions from './components/Admin/Subscriptions';
import "./saas/main.scss";
// Sass app asset

import "./app-assets/app-asset-main.scss";

const auth = localStorage.getItem('isAuth');
const routing = <Router>
    <div>
        {(auth === "true") ? <Navbar /> : ""}
        {(auth === "true") ? <MainMenu /> : ""}
        <Switch>
            <Route exact path='/' component={Login} />

            <Route path='/login' component={(auth === "true") ? Dashboard : Login} />

            <Route path='/dashboard' component={Dashboard} />

            <Route path='/products/all' component={(auth === "true") ? ProductsAll : Login} />
            <Route path='/products/new' component={(auth === "true") ? ProductAdd : Login} />
            <Route path='/products/edit' component={(auth === "true") ? ProductEdit : Login} />
            <Route path='/products/attributes' component={(auth === "true") ? ProductAttributes : Login} />
            <Route path='/products/categories' component={(auth === "true") ? ProductCatagories : Login} />

            <Route path='/packages/all' component={(auth === "true") ? PackagesAll : Login} />
            <Route path='/packages/new' component={(auth === "true") ? PackageAdd : Login} />
            <Route path='/packages/edit' component={(auth === "true") ? PackageEdit : Login} />

            <Route path='/coupons/all' component={(auth === "true") ? CouponsAll : Login} />
            <Route path='/coupons/new' component={(auth === "true") ? CouponAdd : Login} />
            <Route path='/coupons/edit' component={(auth === "true") ? CouponEdit : Login} />
            <Route path='/coupons/deal-tags' component={(auth === "true") ? CouponDealTags : Login} />

            <Route path='/search-and-sort/websites' component={(auth === "true") ? SearchAndSortWebsites : Login} />
            <Route path='/search-and-sort/ads' component={(auth === "true") ? SearchAndSortAds : Login} />
            <Route path='/search-and-sort/products' component={(auth === "true") ? SearchAndSortProducts : Login} />
            <Route path='/search-and-sort/companies' component={(auth === "true") ? SearchAndSortCompanies : Login} />
            <Route path='/search-and-sort/attributes' component={(auth === "true") ? SearchAndSortAttributes : Login} />
            <Route path='/search-and-sort/logs' component={(auth === "true") ? SearchAndSortLogs : Login} />

            <Route path='/subscriptions' component={(auth === "true") ? Subscriptions : Login} />

            <Route path='/comments-and-ratings/comments' component={(auth === "true") ? CommentsAndRatingsComments : Login} />
            <Route path='/comments-and-ratings/reviews' component={(auth === "true") ? CommentsAndRatingsReviews : Login} />
            <Route path='/comments-and-ratings/ratings' component={(auth === "true") ? CommentsAndRatingsRatings : Login} />

            <Route path='/wallet/payments' component={(auth === "true") ? WalletPayments : Login} />
            <Route path='/wallet/receivings' component={(auth === "true") ? WalletReceivings : Login} />
            <Route path='/wallet/ratings' component={(auth === "true") ? WalletRatings : Login} />

            <Route path='/users/all' component={(auth === "true") ? UsersAll : Login} />
            <Route path='/users/new' component={(auth === "true") ? UserAdd : Login} />
            <Route path='/users/edit' component={(auth === "true") ? UserEdit : Login} />

            <Route path='/settings' component={(auth === "true") ? Settings : Login} />
        </Switch>
        {(auth === "true") ? <Footer /> : ""}
    </div >
</Router>
ReactDOM.render(routing, document.getElementById('root'));
