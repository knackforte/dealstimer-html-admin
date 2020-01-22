import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductsAll extends Component {
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
                          <th>Categories</th>
                          <th>Store Count</th>
                          <th>Lowest Price($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>25</td>
                          <td>647.25</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>12</td>
                          <td>65.52</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>33</td>
                          <td>400.00</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>25</td>
                          <td>647.25</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>12</td>
                          <td>65.52</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>33</td>
                          <td>400.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th></th>
                          <th colSpan="3">Total Products Count</th>
                          <th>2547</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ textAlign: 'right' }}>
              <span>Page 3 of 4 </span>&nbsp;
          <button className="btn btn-secondary">{'<<'}</button>
              <button className="btn btn-secondary">{'<'}</button>
              <button className="btn btn-secondary">1</button>
              <button className="btn btn-secondary">2</button>
              <button className="btn btn-primary disabled">3</button>
              <button className="btn btn-secondary">4</button>
              <button className="btn btn-secondary">></button>
              <button className="btn btn-secondary">>></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsAll;