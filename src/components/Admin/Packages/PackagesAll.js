import React, { Component } from 'react';

class PackagesAll extends Component {
  render() {
    return (
      <div className="app-content content container-fluid">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-xs-12 mb-1">
              <h2 className="content-header-title">Subscription Packages</h2>
            </div>
            <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
              <div className="breadcrumb-wrapper col-xs-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="{{url('/')}}">Home</a>
                  </li>
                  <li className="breadcrumb-item"><a href="#">Packages</a>
                  </li>
                  <li className="breadcrumb-item active">Package Manager
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title" id="basic-layout-form">Package Manager</h4>
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
                          <div className="col-md-4">
                            <div className="form-group">
                              <label for="projectinput1">Package Name</label>
                              <input type="text" id="" className="form-control" placeholder="e.g. Silver Package" name="fname" />
                              <span className="text-muted">This name will appear on packages screen.</span>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-8">
                                <label for="projectinput1">Package Duration</label>
                                <input type="number" id="" className="form-control" placeholder="" name="fname" />
                              </div>
                              <div className="col-md-4">
                                <label for="projectinput1">Unit</label>
                                <select name="" id="" className="form-control">
                                  <option value="">Day</option>
                                  <option value="" selected>Month</option>
                                  <option value="">Year</option>
                                </select>
                              </div>
                              <div className="col-md-12">
                                <span className="text-muted">Specify duration for packages</span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label for="projectinput1">Allowed featured products</label>
                              <input type="number" id="" className="form-control" name="fname" />
                              <span className="text-muted">Enter allowed number of featured products could be added.</span>
                            </div>
                            <div className="form-group">
                              <label for="projectinput1">Allows Regular Products</label>
                              <input type="number" id="" className="form-control" name="fname" />
                              <span className="text-muted">Enter allowed number of regular products could be added.</span>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-7">
                                <label for="projectinput1">Package Price</label>
                                <input type="number" id="" className="form-control" name="fname" />
                                <span className="text-muted">Package regular price</span>
                              </div>
                              <div className="col-md-5">
                                <label for="projectinput1">Status</label>
                                <select name="" id="" className="form-control">
                                  <option value="" selected>Active</option>
                                  <option value="" selected>Inactive</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group">
                              <button type="button" className="btn btn-warning mr-1">
                                <i className="icon-cross2"></i> Clear
                                          </button>
                              <button type="submit" className="btn btn-primary">
                                <i className="icon-check2"></i> Save
                                          </button>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="table-responsive">
                              <table className="table mb-0">
                                <thead className="thead-inverse">
                                  <tr>
                                    <th>ID</th>
                                    <th>Package</th>
                                    <th>Duration</th>
                                    <th>Featured Products</th>
                                    <th>Regular Products</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Gold <br /><a href="#" className="text-danger">Delete</a> <a
                                      href="#" className="text-success">Edit</a></td>
                                    <td>1 Year</td>
                                    <td>100</td>
                                    <td>5000</td>
                                    <td>100 AED</td>
                                    <td>Active</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Silver <br /><a href="#" className="text-danger">Delete</a> <a
                                      href="#" className="text-success">Edit</a></td>
                                    <td>1 Year</td>
                                    <td>100</td>
                                    <td>5000</td>
                                    <td>100 AED</td>
                                    <td>Active</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Platinum <br /><a href="#" className="text-danger">Delete</a> <a
                                      href="#" className="text-success">Edit</a></td>
                                    <td>1 Year</td>
                                    <td>100</td>
                                    <td>5000</td>
                                    <td>100 AED</td>
                                    <td>Active</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group row">
                            </div>
                          </div>
                          <div className="col-md-4" style={{ paddingTop: '26px' }}>
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

export default PackagesAll;
