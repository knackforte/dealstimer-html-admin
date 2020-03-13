import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { validateAll } from 'indicative/validator';
import axios from 'axios';
import '../../../app-assets/css/customModal.css';
import { TYPE_CATEGORY_VIEW, CATEGORY_SUBCATEGORY_VIEW, ADD_PRODUCT_MODAL_API_URL } from '../../Common/Constants';

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
    picture: '',
    selectedView: 'select',
    selectedCategory: 'select',
    selectedSubCategory: 'select'
};

class ProductAddModal extends Component {
    constructor (props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.setState({ product_name: this.props.product_name });
        this.setState({ price: this.props.price });
        this.setState({ discount: this.props.discount });
        this.setState({ sale_price: this.props.sale_price });
        this.setState({ in_stock: this.props.in_stock });
        this.setState({ product_url: this.props.product_url });
        this.setState({ picture: this.props.picture });
    }

    resetState = () => {
        this.setState(initialState);
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    typeChangeHandler = (e) => {
        this.setState({ selectedView: e.target.value });
        this.setState({ type: e.target.value });
        this.setState({ selectedCategory: 'select' });
        this.setState({ selectedSubCategory: 'select' });
    }
    categoryChangeHandler = (e) => {
        this.setState({ selectedCategory: e.target.value });
        this.setState({ category: e.target.value });
        this.setState({ selectedSubCategory: 'select' });
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
                formData.append('picture', this.state.picture);

                axios.post(ADD_PRODUCT_MODAL_API_URL, formData, config)
                    .then(response => {
                        alert("Product has been saved successfully!");
                        this.resetState();
                        this.props.closeModal();
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
        const customStyle = {
            top: "20px",
            opacity: 1
        };
        const getCategoryMethod = () => {
            if (this.state.selectedView !== "select") {
                const categories = TYPE_CATEGORY_VIEW.filter(({ type }) => type === this.state.selectedView)[0];
                return (
                    <div>
                        <select id="category" className={"form-control " + (this.state.errors.category ? 'border-danger' : "")} name="category" onChange={this.categoryChangeHandler} value={this.state.selectedCategory}>
                            <option value='select'>Select Category</option>
                            {categories.category.map(function (name, index) {
                                return <option value={name}>{categories.categoryName[index]}</option>;
                            })}
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
                const subCategories = CATEGORY_SUBCATEGORY_VIEW.filter(({ category }) => category === this.state.selectedCategory)[0]
                return (
                    <div>
                        <select id="subCategory" className={"form-control " + (this.state.errors.subCategory ? 'border-danger' : "")} name="subCategory" onChange={this.subCategoryChangeHandler} value={this.state.selectedSubCategory}>
                            <option value="select">Select Subcategory</option>
                            {subCategories.subCategory.map(function (name, index) {
                                return <option value={name}>{subCategories.subCategoryName[index]}</option>;
                            })}
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
            <div>
                <Modal show={this.props.modalIsOpen} size="lg" onHide={this.props.closeModal} style={customStyle} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ display: "inline-block" }}>Add Product</Modal.Title>
                    </Modal.Header>

                    <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                        <Modal.Body className="modalBody">
                            <div>
                                <div className="form-body">

                                    <div className="row form-group">
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label for="product_name">Product Name</label>
                                                    <input name='product_name' type="text" id="product_name" className={"form-control " + (this.state.errors.product_name ? 'border-danger' : "")} onChange={this.handleInputChange} value={this.state.product_name} disabled={true} />
                                                    <p className='danger lighten-2'>{(this.state.errors.product_name) ? this.state.errors.product_name : ''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label for="price">Price
                                                    </label>
                                                    <input type="number" step="0.01" id="price" className={"form-control " + (this.state.errors.price ? 'border-danger' : "")} name="price" onChange={this.handleInputChange} value={this.state.price} disabled={true} />
                                                    <p className='danger lighten-2'>{(this.state.errors.price) ? this.state.errors.price : ''}</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <label for="discount">Discount
                                                    </label>
                                                    <input type="number" step="0.01" id="discount" className={"form-control " + (this.state.errors.discount ? 'border-danger' : "")} name="discount" onChange={this.handleInputChange} value={this.state.discount} disabled={true} />
                                                    <p className='danger lighten-2'>{(this.state.errors.discount) ? this.state.errors.discount : ''}</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <label for="sale_price">Sale Price
                                                    </label>
                                                    <input type="number" step="0.01" id="sale_price" className={"form-control " + (this.state.errors.sale_price ? 'border-danger' : "")} name="sale_price" onChange={this.handleInputChange} value={this.state.sale_price} disabled={true} />
                                                    <p className='danger lighten-2'>{(this.state.errors.sale_price) ? this.state.errors.sale_price : ''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label for="in_stock">In Stock ?</label>
                                                    <input type="checkbox" id="in_stock" className="checkmarkMe" name="in_stock" onChange={this.handleInputChange} checked={this.state.in_stock} disabled={true} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label for="product_url">Product URL</label>
                                                    <input type="text" id="product_url" className={"form-control " + (this.state.errors.product_url ? 'border-danger' : "")} name="product_url" onChange={this.handleInputChange} value={this.state.product_url} disabled={true} />
                                                    <p className='danger lighten-2'>{(this.state.errors.product_url) ? this.state.errors.product_url : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{ textAlign: "center" }}>
                                                <label style={{ textAlign: "left", float: "left", marginLeft: "15px" }}>Product picture</label>
                                                <div className="input-group">
                                                    <img src={this.state.picture} width="270" height="250" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-md-1" htmlFor="type">Type:</label>
                                        <div className="col-md-3">
                                            <select id="type" className={"form-control " + (this.state.errors.type ? 'border-danger' : "")} name="type" onChange={this.typeChangeHandler} value={this.state.selectedView}>
                                                <option value="select">Select Type</option>
                                                {TYPE_CATEGORY_VIEW.map(data => <option value={data.type}>{data.typeName}</option>)}
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
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.closeModal} style={{ marginRight: "5px" }}>Close</Button>
                            <Button variant="primary" type="submit" disabled={this.state.isButtonDisabled}>Add Product</Button>
                        </Modal.Footer>

                    </form>
                </Modal>
            </div>
        );
    }
}

export default ProductAddModal;