import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductEdit extends Component {
    render() {
        return (
            <div className="app-content content container-fluid">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-xs-12 mb-1">
                            <h2 className="content-header-title">Add New Product</h2>
                        </div>
                        <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Prodocts</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add New
                </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form">Manual Product Entry</h4>
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
                                                <h4 className="form-section"><i className="icon-head"></i> Personal Info</h4>
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <label for="projectinput1">Product Name</label>
                                                            <input type="text" id="projectinput1" className="form-control" placeholder="Product Name" name="fname" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <label>Attribute Name</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <label>Attribute Value</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-12 attribute_row">
                                                                <div className="row attribute_row_content pb-1">
                                                                    <div className="col-md-5">
                                                                        <select className="form-control" name="attributename[]" id="">
                                                                            <option value="">Select Attribute</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <textarea name="attributevalues[]" className="form-control" cols="30" rows="3" placeholder="Enter attribute values separated by '|'."></textarea>
                                                                    </div>
                                                                    <div className="col-md-2 " style="text-align: right">
                                                                        <button type="button" className="btn btn-danger row_minus" disabled>-</button>
                                                                        <button type="button" className="btn btn-success row_plus">+</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="form-group">
                                                                <label for="detail">Product Detail</label>
                                                                <textarea id="detail" className="form-control" placeholder="Product Detail" name="detail" rows="10"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card" style="max-height: 400px; overflow-y: auto">
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <h4 className="card-title">Categories</h4>
                                                                </div>
                                                                <ul className="list-group" style="list-style: none;">
                                                                    <li className="pl-1 custom-control custom-checkbox">
                                                                        <input type="checkbox" id="category1" className="custom-control-input" />
                                                                        <label for="category1" className="custom-control-label"> category 1 </label>
                                                                    </li>
                                                                    <li className="pl-1">
                                                                        <label for="category2">
                                                                            <input type="checkbox" id="category2" className="checkbox" />
                                                                            category 2
                                                    </label>
                                                                        <ul className="list-group" style="list-style: none">
                                                                            <li className="pl-1">
                                                                                <label for="subcategory1">
                                                                                    <input type="checkbox" id="subcategory1" className="checkbox" />
                                                                                    sub category 1
                                                            </label>
                                                                            </li>
                                                                            <li className="pl-1">
                                                                                <label for="subcategory2">
                                                                                    <input type="checkbox" id="subcategory2" className="checkbox" />
                                                                                    sub category 2
                                                            </label>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="pl-1">
                                                                        <label for="category3">
                                                                            <input type="checkbox" id="category3" className="checkbox" />
                                                                            category 3
                                                    </label>
                                                                    </li>
                                                                </ul>
                                                                <div className="card-block">
                                                                    <a href="#" className="card-link">New Category</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Select File</label>
                                                    <label id="projectinput7" className="file center-block">
                                                        <input type="file" id="file" />
                                                        <span className="file-custom"></span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <button type="button" className="btn btn-warning mr-1">
                                                    <i className="icon-cross2"></i> Cancel
                            </button>
                                                <button type="submit" className="btn btn-primary">
                                                    <i className="icon-check2"></i> Save
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

        );
    }
}

export default ProductEdit;