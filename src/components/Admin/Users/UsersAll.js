import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UsersAll extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
            }
        }
        axios.get('http://clientdemo.knackforte.com/apidealstimer/public/api/user', config)
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch(e => {
                alert('Unable to fetch data from API.');
            })
    }
    render() {
        return (
            <div className="app-content content container-fluid">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-xs-12 mb-1">
                            <h2 className="content-header-title">All Users</h2>
                        </div>
                        <div
                            className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Users</a>
                                    </li>
                                    <li className="breadcrumb-item active">All Users
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-1">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form"><i className="icon-search" />
                                        Search</h4>
                                    <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3" /></a>
                                </div>
                                <div className="card-body collapse in">
                                    <div className="card-block pb-0">
                                        <form className="form mb-0">
                                            <div className="form-body">
                                                <div className="form-group row">
                                                    <label className="col-md-2" htmlFor="projectinput1">User Name</label>
                                                    <div className="col-md-3">
                                                        <input
                                                            type="text"
                                                            id="projectinput1"
                                                            className="form-control"
                                                            placeholder="User Name"
                                                            name="fname" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="icon-search" />
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">
                                <div className="card-body collapse in">
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="thead-inverse">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.users.map(data => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">
                                                                <label className="checkbox-container">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark" />
                                                                    &nbsp;{data.id}
                                                                </label>
                                                            </th>
                                                            <td>{data.first_name + " " + data.last_name}
                                                                <br />
                                                                <a href="#">Edit</a>
                                                                &nbsp;
                                                                    <a href="#" className="text-danger">Delete</a>
                                                            </td>
                                                            <td>{data.username}</td>
                                                            <td>{data.email}</td>
                                                            <td>{data.display_name}</td>
                                                            <td>Active</td>
                                                        </tr>
                                                    );
                                                })}

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th />
                                                    <th colSpan={3}>Total Users</th>
                                                    <th>{this.state.users.length}</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default UsersAll;
