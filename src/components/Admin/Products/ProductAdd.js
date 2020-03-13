import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import { validateAll } from 'indicative/validator';
import axios from 'axios';
import { Cascader } from 'antd';
import 'antd/dist/antd.css';

import { GET_CATEGORIES, ADD_PRODUCT_API_URL } from '../../Common/Constants';

const initialState = {
    product_name: "",
    price: "",
    category: "",
    errors: {},
    isButtonDisabled: false,
    picture: [],
    options:[]
};

class ProductAdd extends Component {
    constructor (props) {
        super(props);
        this.state = initialState;
    }
    componentDidMount(){
        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
            }
        }
        axios.get(GET_CATEGORIES, config)
            .then(response => {
                this.setState({options: response.data});
            })
            .catch(e => {
                alert(e.response.data);
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

    handleCategory = (value) =>{
        this.setState({
            category: value[value.length-1]
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            product_name: "required|string",
            category: "required"
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
                formData.append('category_id', this.state.category);
                formData.append('picture', this.state.picture[0]);
                formData.append('created_by', 1);

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
                                                            <div className="col-md-8">
                                                            <label>Product Category
                                                        </label>
                                                            <Cascader
                                                        options={this.state.options}
                                                        onChange={this.handleCategory}
                                                        style={{"display":"block"}}
                                                        name="category_id"
                                                    />
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
