import React, {Component} from 'react';

class Users extends Component {
    render()
    {
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
                                    <h4 className="card-title" id="basic-layout-form"><i className="icon-search"/>
                                        Search</h4>
                                    <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"/></a>
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
                                                            placeholder="Product Name"
                                                            name="fname"/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="icon-search"/>
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
                                                <tr>
                                                    <th scope="row">
                                                        <label className="checkbox-container">
                                                            <input type="checkbox"/>
                                                            <span className="checkmark"/>
                                                            &nbsp;1
                                                        </label>
                                                    </th>
                                                    <td>Mark
                                                        <br/>
                                                        <a href="#">Edit</a>
                                                        &nbsp;
                                                        <a href="#" className="text-danger">Delete</a>
                                                    </td>
                                                    <td>otto</td>
                                                    <td>otto@mail.com</td>
                                                    <td>Vendor</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label className="checkbox-container">
                                                            <input type="checkbox"/>
                                                            <span className="checkmark"/>
                                                            &nbsp;2
                                                        </label>
                                                    </th>
                                                    <td>Jacob<br/>
                                                        <a href="#">Edit</a>&nbsp;
                                                        <a href="#" className="text-danger">Delete</a>
                                                    </td>
                                                    <td>jacob</td>
                                                    <td>jacob@gmail.com</td>
                                                    <td>Vendor</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label className="checkbox-container">
                                                            <input type="checkbox"/>
                                                            <span className="checkmark"/>
                                                            &nbsp;3
                                                        </label>
                                                    </th>
                                                    <td>Larry<br/>
                                                        <a href="#">Edit</a>&nbsp;
                                                        <a href="#" className="text-danger">Delete</a>
                                                    </td>
                                                    <td>larry</td>
                                                    <td>larry@gmail.com</td>
                                                    <td>Admin</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label className="checkbox-container">
                                                            <input type="checkbox"/>
                                                            <span className="checkmark"/>
                                                            &nbsp;4
                                                        </label>
                                                    </th>
                                                    <td>Mark<br/>
                                                        <a href="#">Edit</a>&nbsp;
                                                        <a href="#" className="text-danger">Delete</a>
                                                    </td>
                                                    <td>otto</td>
                                                    <td>otto@mail.com</td>
                                                    <td>Vendor</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label className="checkbox-container">
                                                            <input type="checkbox"/>
                                                            <span className="checkmark"/>
                                                            &nbsp;5
                                                        </label>
                                                    </th>
                                                    <td>Jacob<br/>
                                                        <a href="#">Edit</a>&nbsp;
                                                        <a href="#" className="text-danger">Delete</a>
                                                    </td>
                                                    <td>jacob</td>
                                                    <td>jacob@gmail.com</td>
                                                    <td>Vendor</td>
                                                    <td>Active</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label className="checkbox-container">
                                                            <input type="checkbox"/>
                                                            <span className="checkmark"/>
                                                            &nbsp;6
                                                        </label>
                                                    </th>
                                                    <td>Larry<br/>
                                                        <a href="#">Edit</a>&nbsp;
                                                        <a href="#" className="text-danger">Delete</a>
                                                    </td>
                                                    <td>larry</td>
                                                    <td>larry@gmail.com</td>
                                                    <td>Admin</td>
                                                    <td>Active</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th/>
                                                    <th colSpan={3}>Total Users</th>
                                                    <th>25</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-12"
                            style={{
                            textAlign: 'right'
                        }}>
                            <span>Page 3 of 4
                            </span>&nbsp;
                            <button className="btn btn-secondary">&lt;&lt;</button>&nbsp;
                            <button className="btn btn-secondary">&lt;
                            </button>&nbsp;
                            <button className="btn btn-secondary">1</button>&nbsp;
                            <button className="btn btn-secondary">2</button>&nbsp;
                            <button className="btn btn-primary disabled">3</button>&nbsp;
                            <button className="btn btn-secondary">4</button>&nbsp;
                            <button className="btn btn-secondary">&gt;</button>&nbsp;
                            <button className="btn btn-secondary">&gt;&gt;</button>&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;
