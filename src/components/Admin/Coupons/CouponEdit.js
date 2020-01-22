import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CouponEdit extends Component {
    render() {
        return (
            <div className="app-content content container-fluid">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-xs-12 mb-1">
                            <h2 className="content-header-title">Coupon Manager</h2>
                        </div>
                        <div
                            className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Edit Coupon
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form">Edit Coupon</h4>
                                    <a className="heading-elements-toggle">
                                        <i className="icon-ellipsis font-medium-3"></i>
                                    </a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li>
                                                <a data-action="expand">
                                                    <i className="icon-expand2"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body collapse in">
                                    <div className="card-block">
                                        <form className="form" >
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="form-group row">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="form-actions">
                                                <button type="button" className="btn btn-warning mr-1">
                                                    <i className="icon-cross2"></i>
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    <i className="icon-check2"></i>
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CouponEdit;
