import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductAttributes extends Component {
    render() {
        return (
            <div className="app-content content container-fluid">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-xs-12 mb-1">
                            <h2 className="content-header-title">Product Manager</h2>
                        </div>
                        <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Product Attributes
                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form">Product Attributes</h4>
                                    <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="expand"><i className="icon-expand2"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body collapse in">
                                    <div className="card-block">
                                        <form className="form">
                                            <div className="form-body">

                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <label for="projectinput1">Attribute Name</label>
                                                            <input type="text" id="projectinput1" className="form-control" placeholder="Attribute Name" name="fname" />
                                                        </div>
                                                        <div className="form-group row">

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4" style={{ paddingTop: '26px' }}>
                                                        <button type="button" className="btn btn-warning mr-1">
                                                            <i className="icon-cross2"></i> Clear
                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            <i className="icon-check2"></i> Save
                                        </button>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead className="thead-inverse">
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>Attribute Name</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">1</th>
                                                                        <td>Mark</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">2</th>
                                                                        <td>Jacob</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">3</th>
                                                                        <td>Larry</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">4</th>
                                                                        <td>Mark</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">5</th>
                                                                        <td>Jacob</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">6</th>
                                                                        <td>Larry</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        );
    }
}

export default ProductAttributes;