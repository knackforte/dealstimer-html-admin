
import React from 'react';
 
class Catagories extends Component{
  render()
  {
    return(
    <div clasname="Catagories">
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
            <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3" /></a>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li><a data-action="expand"><i className="icon-expand2" /></a></li>
              </ul>
            </div>
          </div>
          <div className="card-body collapse in">
            <div className="card-block">
              <form className="form">
                <div className="form-body">
                  {'{'}{'{'}--                                <h4 className="form-section"><i className="icon-head" /> Personal Info</h4>--{'}'}{'}'}
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="projectinput1">Category Name</label>
                        <input type="text" id className="form-control" placeholder="Category Name" name="fname" />
                        <span className="text-muted">The name is how it appears on your site.</span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="projectinput1">Category Slug</label>
                        <input type="text" id className="form-control" placeholder="e.g. my-category" name="fname" />
                        <span className="text-muted">A URL friendly keyword used to access specific category.</span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="projectinput1">Parent Category</label>
                        <select id className="form-control" name="fname">
                          <option value>None</option>
                        </select>
                        <span className="text-muted">Used for indentation of categories.</span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="projectinput1">Description</label>
                        <textarea id className="form-control" cols name="fname" defaultValue={""} />
                        <span className="text-muted" />
                      </div>
                      <div className="form-group">
                        <button type="button" className="btn btn-warning mr-1">
                          <i className="icon-cross2" /> Clear
                        </button>
                        <button type="submit" className="btn btn-primary">
                          <i className="icon-check2" /> Save
                        </button>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead className="thead-inverse">
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
                              <td>Mark <br /><a href="#" className="text-danger">Delete</a> <a href="#" className="text-success">Edit</a></td>
                              <td>-</td>
                              <td>-</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob <br /><a href="#" className="text-danger">Delete</a> <a href="#" className="text-success">Edit</a></td>
                              <td>-</td>
                              <td>-</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry <br /><a href="#" className="text-danger">Delete</a> <a href="#" className="text-success">Edit</a></td>
                              <td>-</td>
                              <td>-</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Mark <br /><a href="#" className="text-danger">Delete</a> <a href="#" className="text-success">Edit</a></td>
                              <td>-</td>
                              <td>-</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Jacob <br /><a href="#" className="text-danger">Delete</a> <a href="#" className="text-success">Edit</a></td>
                              <td>-</td>
                              <td>-</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">6</th>
                              <td>Larry <br /><a href="#" className="text-danger">Delete</a> <a href="#" className="text-success">Edit</a></td>
                              <td>-</td>
                              <td>-</td>
                              <td>0</td>
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
                    <div className="col-md-4" style={{paddingTop: '26px'}}>
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
 
    )
  }
}

export default Catagories;
