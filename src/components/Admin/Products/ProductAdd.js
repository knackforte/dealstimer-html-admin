import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import { validateAll } from 'indicative/validator';
import axios from 'axios';
import { TYPE_CATEGORY_VIEW, CATEGORY_SUBCATEGORY_VIEW, ADD_PRODUCT_API_URL, GET_PRODUCT_TYPES_API_URL, GET_PRODUCT_CATEGORIES_API_URL, GET_PRODUCT_SUBCATEGORIES_API_URL } from '../../Common/Constants';
const initialState = {
    product_name: "",
    price: "",
    discount: "",
    sale_price: "",
    in_stock: false,
    product_url: "",
    type: "",
    category: "",
    subCategory: "",
    errors: {},
    isButtonDisabled: false,
    picture: [],
    selectedView: 'select',
    selectedCategory: 'select',
    selectedSubCategory: 'select',
    productTypes: [],
    productCategories: [],
    productSubcategories: []
};

class ProductAdd extends Component {
    constructor (props) {
        super(props);
        this.state = initialState;
    }
    componentDidMount() {
        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
            }
        }
        axios.post(GET_PRODUCT_TYPES_API_URL, {}, config)
            .then(response => {
                this.setState({ productTypes: response.data });
            })
            .catch(e => {
                alert("Error getting product types from API.");
            })
    }
    resetState = () => {
        this.setState(initialState);
    }
    handleFileChange = (picture) => {
        this.setState({
            picture: picture
        });
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    typeChangeHandler = (e) => {
        this.setState({ selectedView: e.target.value });
        this.setState({ type: e.target.value });
        this.setState({ selectedCategory: 'select' });
        this.setState({ selectedSubCategory: 'select' });
        if (e.target.value !== "select") {
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            let formData = new FormData();
            formData.append('typeName', e.target.value);
            axios.post(GET_PRODUCT_CATEGORIES_API_URL, formData, config)
                .then(response => {
                    this.setState({ productCategories: response.data });
                })
                .catch(e => {
                    alert("Error getting product categories from API.");
                })
        }
    }
    categoryChangeHandler = (e) => {
        this.setState({ selectedCategory: e.target.value });
        this.setState({ category: e.target.value });
        this.setState({ selectedSubCategory: 'select' });
        if (e.target.value !== "select") {
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            let formData = new FormData();
            formData.append('catName', e.target.value);
            axios.post(GET_PRODUCT_SUBCATEGORIES_API_URL, formData, config)
                .then(response => {
                    this.setState({ productSubcategories: response.data });
                })
                .catch(e => {
                    alert("Error getting product sub-categories from API.");
                })
        }
    }
    subCategoryChangeHandler = (e) => {
        this.setState({ selectedSubCategory: e.target.value });
        this.setState({ subCategory: e.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            product_name: "required|string",
            price: "required",
            discount: "required",
            sale_price: "required",
            product_url: "required",
            type: "required",
            category: "required",
            subCategory: "required"
        };

        const messages = {
            required: 'The field is required'
        }

        validateAll(data, rules, messages)
            .then(() => {
                this.setState({ errors: "{}" });
                this.setState({
                    isButtonDisabled: true
                });
                let config = {
                    headers: {
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                        'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
                    }
                }
                let formData = new FormData();
                formData.append('name', this.state.product_name);
                formData.append('price', this.state.price);
                formData.append('discount', this.state.discount);
                formData.append('sale_price', this.state.sale_price);
                formData.append('in_stock', this.state.in_stock);
                formData.append('permalink', this.state.product_url);
                formData.append('type', this.state.type);
                formData.append('category', this.state.category);
                formData.append('sub_category', this.state.subCategory);
                formData.append('picture', this.state.picture[0]);

                axios.post(ADD_PRODUCT_API_URL, formData, config)
                    .then(response => {
                        alert("Product has been saved successfully!");
                        this.resetState();
                    })
                    .catch(e => {
                        alert(e.response.data);
                        this.setState({
                            isButtonDisabled: false
                        });
                    })
            })
            .catch((errors) => {
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                this.setState({ errors: formattedErrors })
            })
    }
    render() {
        const getCategoryMethod = () => {
            if (this.state.selectedView !== "select") {
                return (
                    <div>
                        <select id="category" className={"form-control " + (this.state.errors.category ? 'border-danger' : "")} name="category" onChange={this.categoryChangeHandler} value={this.state.selectedCategory}>
                            <option value='select'>Select Category</option>
                            {this.state.productCategories.map(data =>
                                <option value={data.name}>{data.display_name}</option>
                            )}
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.category) ? this.state.errors.category : ''}</p>
                    </div>
                );

            } else {
                return (
                    <div>
                        <select id="category" className={"form-control " + (this.state.errors.category ? 'border-danger' : "")} name="category" onChange={this.categoryChangeHandler} value={this.state.selectedCategory}>
                            <option value='select'>Select Category</option>
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.category) ? this.state.errors.category : ''}</p>
                    </div>
                );
            }
        }

        const getSubCategoryMethod = () => {
            if (this.state.selectedCategory !== "select") {
                return (
                    <div>
                        <select id="subCategory" className={"form-control " + (this.state.errors.subCategory ? 'border-danger' : "")} name="subCategory" onChange={this.subCategoryChangeHandler} value={this.state.selectedSubCategory}>
                            <option value="select">Select Subcategory</option>
                            {this.state.productSubcategories.map(data =>
                                <option value={data.name}>{data.display_name}</option>
                            )}
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.subCategory) ? this.state.errors.subCategory : ''}</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <select id="subCategory" className={"form-control " + (this.state.errors.subCategory ? 'border-danger' : "")} name="subCategory" onChange={this.subCategoryChangeHandler} value={this.state.selectedSubCategory}>
                            <option value="select">Select Subcategory</option>
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.subCategory) ? this.state.errors.subCategory : ''}</p>
                    </div>
                );
            }
        }
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
                                    <li className="breadcrumb-item active">Add Product
                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form">Add Product</h4>
                                    <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="expand"><i className="icon-expand2"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body collapse in">
                                    <div className="card-block">
                                        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                                            <div className="form-body">

                                                <div className="row form-group">
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label for="product_name">Product Name</label>
                                                                <input name='product_name' type="text" id="product_name" className={"form-control " + (this.state.errors.product_name ? 'border-danger' : "")} onChange={this.handleInputChange} value={this.state.product_name} />
                                                                <p className='danger lighten-2'>{(this.state.errors.product_name) ? this.state.errors.product_name : ''}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label for="price">Price
                                                        </label>
                                                                <input type="number" step="0.01" id="price" className={"form-control " + (this.state.errors.price ? 'border-danger' : "")} name="price" onChange={this.handleInputChange} value={this.state.price} />
                                                                <p className='danger lighten-2'>{(this.state.errors.price) ? this.state.errors.price : ''}</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="discount">Discount
                                                        </label>
                                                                <input type="number" step="0.01" id="discount" className={"form-control " + (this.state.errors.discount ? 'border-danger' : "")} name="discount" onChange={this.handleInputChange} value={this.state.discount} />
                                                                <p className='danger lighten-2'>{(this.state.errors.discount) ? this.state.errors.discount : ''}</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="sale_price">Sale Price
                                                        </label>
                                                                <input type="number" step="0.01" id="sale_price" className={"form-control " + (this.state.errors.sale_price ? 'border-danger' : "")} name="sale_price" onChange={this.handleInputChange} value={this.state.sale_price} />
                                                                <p className='danger lighten-2'>{(this.state.errors.sale_price) ? this.state.errors.sale_price : ''}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label for="in_stock">In Stock ?</label>
                                                                <input type="checkbox" id="in_stock" className="checkmarkMe" name="in_stock" onChange={this.handleInputChange} checked={this.state.in_stock} />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label for="product_url">Product URL</label>
                                                                <input type="text" id="product_url" className={"form-control " + (this.state.errors.product_url ? 'border-danger' : "")} name="product_url" onChange={this.handleInputChange} value={this.state.product_url} />
                                                                <p className='danger lighten-2'>{(this.state.errors.product_url) ? this.state.errors.product_url : ''}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div style={{ textAlign: "center" }}>
                                                            <label style={{ textAlign: "left", float: "left", marginLeft: "15px" }}>Product picture</label>
                                                            <div className="input-group">
                                                                <DropzoneArea
                                                                    dropzoneText='Add Product Picture'
                                                                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                                                    onChange={this.handleFileChange}
                                                                    filesLimit={1}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label className="col-md-1" htmlFor="type">Type:</label>
                                                    <div className="col-md-3">
                                                        <select id="type" className={"form-control " + (this.state.errors.type ? 'border-danger' : "")} name="type" onChange={this.typeChangeHandler} value={this.state.selectedView}>
                                                            <option value="select">Select Type</option>
                                                            {this.state.productTypes.map(data => <option value={data.name}>{data.display_name}</option>)}
                                                        </select>
                                                        <p className='danger lighten-2'>{(this.state.errors.type) ? this.state.errors.type : ''}</p>
                                                    </div>
                                                    <label className="col-md-1" htmlFor="projectinput2">Category:</label>
                                                    <div className="col-md-3">
                                                        {getCategoryMethod()}
                                                    </div>
                                                    <label className="col-md-1" htmlFor="projectinput2">Sub Category:</label>
                                                    <div className="col-md-3">
                                                        {getSubCategoryMethod()}
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="form-actions">
                                                <button type="submit" className="btn btn-primary" disabled={this.state.isButtonDisabled}>
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

export default ProductAdd;
