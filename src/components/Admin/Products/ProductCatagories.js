import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCategories extends Component {
  render() {
    return (
      <div className="app-content content container-fluid">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-xs-12 mb-1">
              <h2 className="content-header-title">Product Categories</h2>
            </div>
            <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
              <div className="breadcrumb-wrapper col-xs-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item"><a href="#">Prodocts</a>
                  </li>
                  <li className="breadcrumb-item active">Categories
              </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title" id="basic-layout-form">Product Categories list</h4>
                  <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li><a data-action="expand"><i className="icon-expand2"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body collapse in">
                  <div class="card-block">
                    <form class="form">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group">
                              <label for="projectinput1">Category Name</label>
                              <input type="text" id="" class="form-control" placeholder="Category Name" name="fname" />
                              <span class="text-muted">The name is how it appears on your site.</span>
                            </div>
                            <div class="form-group">
                              <label for="projectinput1">Category Slug</label>
                              <input type="text" id="" class="form-control" placeholder="e.g. my-category" name="fname" />
                              <span class="text-muted">A URL friendly keyword used to access specific category.</span>
                            </div>
                            <div class="form-group">
                              <label for="projectinput1">Parent Category</label>
                              <select id="" class="form-control" name="fname">
                                <option value="">None</option>
                              </select>
                              <span class="text-muted">Used for indentation of categories.</span>
                            </div>
                            <div class="form-group">
                              <label for="projectinput1">Description</label>
                              <textarea id="" class="form-control" cols="" name="fname"></textarea>
                              <span class="text-muted"></span>
                            </div>
                            <div class="form-group">
                              <button type="button" class="btn btn-warning mr-1">
                                <i class="icon-cross2"></i> Clear
                              </button>
                              <button type="submit" class="btn btn-primary">
                                <i class="icon-check2"></i> Save
                              </button>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <div class="table-responsive">
                              <table class="table mb-0">
                                <thead class="thead-inverse">
                                  <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Desctiption</th>
                                    <th>Count</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark <br /><a href="#" class="text-danger">Delete</a> <a
                                      href="#" class="text-success">Edit</a></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob <br /><a href="#" class="text-danger">Delete</a> <a
                                      href="#" class="text-success">Edit</a></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry <br /><a href="#" class="text-danger">Delete</a> <a
                                      href="#" class="text-success">Edit</a></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>Mark <br /><a href="#" class="text-danger">Delete</a> <a
                                      href="#" class="text-success">Edit</a></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob <br /><a href="#" class="text-danger">Delete</a> <a
                                      href="#" class="text-success">Edit</a></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">6</th>
                                    <td>Larry <br /><a href="#" class="text-danger">Delete</a> <a
                                      href="#" class="text-success">Edit</a></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>


                        <div class="row">
                          <div class="col-md-8">
                            <div class="form-group row">
                            </div>
                          </div>
                          <div class="col-md-4" style={{ paddingTop: '26px' }}>
                          </div>
                        </div>
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

export default ProductCategories;