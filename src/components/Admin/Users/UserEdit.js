import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserEdit extends Component {
    render() {
        return (
            <div className="app-content content container-fluid">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-xs-12 mb-1">
                            <h2 className="content-header-title">User Manager</h2>
                        </div>
                        <div
                            className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Users</a>
                                    </li>
                                    <li className="breadcrumb-item active">Edit User
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form">Edit User</h4>
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
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">First Name
                                                                </label>
                                                                <input type="text" id="projectinput1" className="form-control" name="fname" /></div>
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Last Name
                                                                    </label>
                                                                <input type="text" id="projectinput1" className="form-control" name="fname" /></div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-12">
                                                                <label for="projectinput1">Username
                                                                        </label>
                                                                <input type="text" id="projectinput1" className="form-control" name="fname" /></div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Email</label>
                                                                <input type="text" id="projectinput1" className="form-control" name="fname" /></div>
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Cell#</label>
                                                                <input type="tel" id="projectinput1" className="form-control" name="fname" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group" style={{ textAlign: "center" }}>
                                                            <label style={{ textAlign: "left", float: "left", marginLeft: '15px' }}>Profile picture</label>
                                                            <div className="input-group">
                                                                <span className="input-group-btn">
                                                                    <span className="btn btn-default btn-file">
                                                                        Browse…
                                                                                            <input type="file" id="imgInp" /></span>
                                                                </span>
                                                                <input type="text" className="form-control" readonly /></div>
                                                            <img id='img-upload' style={{ maxHeight: "200px", width: 'auto' }} align="center" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-8">
                                                        <label for="projectinput1">Address</label>
                                                        <textarea name="attributevalues[]" className="form-control" cols="30" rows="3"></textarea>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="projectinput1">Gender</label>
                                                        <select name="" id="" className="form-control">
                                                            <option value="">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row p-0">
                                                    <div className="col-md-6">
                                                        <hr className="m-0" /></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 pt-2">
                                                        <h4>Store Detail</h4>
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
        )
    }
}
export default UserEdit;