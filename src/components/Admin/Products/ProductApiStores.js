import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GET_API_STORES_API_URL, IMAGE_PATH } from '../../Common/Constants';

class ProductApiStores extends Component {
    state = {
        stores: []
    }
    componentDidMount() {
        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
            }
        }
        axios.get(GET_API_STORES_API_URL, config)
            .then(response => {
                this.setState({ stores: response.data });
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
                            <h2 className="content-header-title">API Stores</h2>
                        </div>
                        <div
                            className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">API Stores
                                    </li>
                                </ol>
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
                                                    <th>Store Name</th>
                                                    <th>Store Logo</th>
                                                    <th>Store URL</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.stores.map(data => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">
                                                                <label className="checkbox-container">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark" />
                                                                    &nbsp;{data.id}
                                                                </label>
                                                            </th>
                                                            <td>{data.store_name}
                                                                <br />
                                                                <a href="#">Edit</a>
                                                                &nbsp;
                                                                    <a href="#" className="text-danger">Delete</a>
                                                            </td>
                                                            <td><img style={{ width: "100px", height: "50px" }} src={IMAGE_PATH + data.picture} alt="Store Image" /></td>
                                                            <td><a href={data.store_url} target="_blank">{data.store_url}</a></td>
                                                            <td><Link to={"/products/api-store/" + data.id}><button class="btn btn-default">Config</button></Link></td>
                                                        </tr>
                                                    );
                                                })}

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th />
                                                    <th colSpan={3}>Total Stores</th>
                                                    <th>{this.state.stores.length}</th>
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

export default ProductApiStores;
