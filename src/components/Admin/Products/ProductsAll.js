import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GET_ADMIN_PRODUCTS, IMAGE_PATH } from '../../Common/Constants';
import axios from 'axios';

const initialState = {
  products: []
};


class ProductsAll extends Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    let config = {
      headers: {
        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
      }
    }
    axios.get(GET_ADMIN_PRODUCTS, config)
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(e => {
        alert(e.response.data);
      })
  }
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
                  <li className="breadcrumb-item active">All Products
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-1">
                <div className="card-header">
                  <h4 className="card-title" id="basic-layout-form"><i className="icon-search"></i> Search</h4>
                  <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
                </div>
                <div className="card-body collapse in">
                  <div className="card-block pb-0">
                    <form className="form mb-0">
                      <div className="form-body">
                        <div className="form-group row">
                          <label className="col-md-2" htmlFor="projectinput1">Product Name</label>
                          <div className="col-md-3">
                            <input type="text" id="projectinput1" className="form-control" placeholder="Product Name" name="fname" />
                          </div>
                          <label className="col-md-1" htmlFor="projectinput2">Category</label>
                          <div className="col-md-3">
                            <input type="text" id="projectinput2" className="form-control" placeholder="Category" name="fname" />
                          </div>
                          <div className="col-md-3">
                            <button type="button" className="btn btn-warning">
                              <i className="icon-cross2"></i> Clear
                                      </button>
                            <button type="submit" className="btn btn-primary">
                              <i className="icon-search"></i> View
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
                          <th>Product Name</th>
                          <th>Picture</th>
                          <th>Price</th>
                          <th>Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.products.map(data => {
                          return (
                            <tr>
                              <th scope="row">{data.product_id}</th>
                              <td>{data.name}</td>
                              <td><img style={{ width: "50px", height: "50px" }} src={IMAGE_PATH + data.images} alt="Product Image" /></td>
                              <td>{data.price}</td>
                              <td>{data.display_name}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th></th>
                          <th colSpan="3">Total Products Count</th>
                          <th>{this.state.products.length}</th>
                        </tr>
                      </tfoot>
                    </table>
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

export default ProductsAll;