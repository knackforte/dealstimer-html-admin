import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from "./components/Auth/protected.route";
import { PrivateRoute } from "./components/Auth/private.route";
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
import ProductApiStores from './components/Admin/Products/ProductApiStores';
import ProductApiStore from './components/Admin/Products/productApiStore';
import ProductTypes from './components/Admin/Products/ProductTypes';
import ProductCatagories from './components/Admin/Products/ProductCatagories';
import ProductSubCatagories from './components/Admin/Products/ProductSubCatagories';
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

const routing = <Router>
    <div>
        <Navbar />
        <MainMenu />
        <Switch>
            <PrivateRoute exact path='/' component={Login} />

            <PrivateRoute path='/login' component={Login} />

            <ProtectedRoute path='/dashboard' component={Dashboard} />

            <ProtectedRoute path='/products/all' component={ProductsAll} />
            <ProtectedRoute path='/products/new' component={ProductAdd} />
            <ProtectedRoute path='/products/api-stores' component={ProductApiStores} />
            <ProtectedRoute path='/products/api-store/:id' component={ProductApiStore} />
            <ProtectedRoute path='/products/edit' component={ProductEdit} />
            <ProtectedRoute path='/products/types' component={ProductTypes} />
            <ProtectedRoute path='/products/categories' component={ProductCatagories} />
            <ProtectedRoute path='/products/subcategories' component={ProductSubCatagories} />

            <ProtectedRoute path='/packages/all' component={PackagesAll} />
            <ProtectedRoute path='/packages/new' component={PackageAdd} />
            <ProtectedRoute path='/packages/edit' component={PackageEdit} />

            <ProtectedRoute path='/coupons/all' component={CouponsAll} />
            <ProtectedRoute path='/coupons/new' component={CouponAdd} />
            <ProtectedRoute path='/coupons/edit' component={CouponEdit} />
            <ProtectedRoute path='/coupons/deal-tags' component={CouponDealTags} />

            <ProtectedRoute path='/search-and-sort/websites' component={SearchAndSortWebsites} />
            <ProtectedRoute path='/search-and-sort/ads' component={SearchAndSortAds} />
            <ProtectedRoute path='/search-and-sort/products' component={SearchAndSortProducts} />
            <ProtectedRoute path='/search-and-sort/companies' component={SearchAndSortCompanies} />
            <ProtectedRoute path='/search-and-sort/attributes' component={SearchAndSortAttributes} />
            <ProtectedRoute path='/search-and-sort/logs' component={SearchAndSortLogs} />

            <ProtectedRoute path='/subscriptions' component={Subscriptions} />

            <ProtectedRoute path='/comments-and-ratings/comments' component={CommentsAndRatingsComments} />
            <ProtectedRoute path='/comments-and-ratings/reviews' component={CommentsAndRatingsReviews} />
            <ProtectedRoute path='/comments-and-ratings/ratings' component={CommentsAndRatingsRatings} />

            <ProtectedRoute path='/wallet/payments' component={WalletPayments} />
            <ProtectedRoute path='/wallet/receivings' component={WalletReceivings} />
            <ProtectedRoute path='/wallet/ratings' component={WalletRatings} />

            <ProtectedRoute path='/users/all' component={UsersAll} />
            <ProtectedRoute path='/users/new' component={UserAdd} />
            <ProtectedRoute path='/users/edit' component={UserEdit} />

            <ProtectedRoute path='/settings' component={Settings} />
        </Switch>
        <Footer />
    </div >
</Router>
ReactDOM.render(routing, document.getElementById('root'));
