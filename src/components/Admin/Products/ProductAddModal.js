import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { validateAll } from 'indicative/validator';
import { MultiCascader } from 'rsuite';
import 'antd/dist/antd.css';
import styles from './ProductModal.module.css';
import axios from 'axios';
import '../../../app-assets/css/customModal.css';
import {
    ADD_PRODUCT_MODAL_API_URL, GET_CATEGORIES, GET_ADMIN_PRODUCTS_BY_CATEGORY_ID
} from '../../Common/Constants';

const initialState = {
    product_name: "",
    product_url: "",
    category: "",
    store_id: "",
    errors: {},
    isButtonDisabled: false,
    picture: '',
    category_options: '',
    products: [],
    selectedProduct: 'select'
};

class ProductAddModal extends Component {
    constructor (props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.setState({ product_name: this.props.product_name });
        this.setState({ product_url: this.props.product_url });
        this.setState({ picture: this.props.picture });
        this.setState({ store_id: this.props.store_id });

        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
            }
        }
        axios.get(GET_CATEGORIES, config)
            .then(response => {
                this.setState({ category_options: response.data });
            })
            .catch(e => {
                alert(e.response.data);
            })

    }

    resetState = () => {
        this.setState(initialState);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCategory = (value) => {
        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
            }
        }
        let formData = new FormData();
        formData.append('category_id', value[value.length - 1]);
        axios.post(GET_ADMIN_PRODUCTS_BY_CATEGORY_ID, formData, config)
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(e => {
                alert(e.response.data);
            })
        this.setState({
            category: value[value.length - 1]
        });
    }

    productChangeHandler = (e) => {
        this.setState({ selectedProduct: e.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            product_name: "required|string",
            product_url: "required",
            selectedProduct: "required"
        };

        const messages = {
            required: 'The field is required'
        }

        validateAll(data, rules, messages).then(() => {
            this.setState({ errors: "{}" });
            this.setState({ isButtonDisabled: true });
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                    'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
                }
            }
            let formData = new FormData();
            formData.append('name', this.state.product_name);
            formData.append('product_parent_id', this.state.selectedProduct);
            formData.append('store_id', this.state.store_id);
            formData.append('category_id', this.state.category);
            formData.append('picture', this.state.picture);
            formData.append('permalink', this.state.product_url);
            formData.append('created_by', 1);

            axios
                .post(ADD_PRODUCT_MODAL_API_URL, formData, config)
                .then(response => {
                    alert("Product has been saved successfully!");
                    this.setState({ isButtonDisabled: false });
                })
                .catch((errors) => {
                    alert("Product already exists!");
                })
        }).catch((errors) => {
            const formattedErrors = {}
            console.log(errors)
            errors.forEach(error => formattedErrors[error.field] = error.message)
            this.setState({ errors: formattedErrors })
        })
    }
    render() {
        const customStyle = {
            top: "20px",
            opacity: 1
        };


        const getProductsMethod = () => {
            if (this.state.category !== "") {
                return (
                    <div>
                        <select
                            id="products"
                            className={"form-control " + (this.state.errors.products
                                ? 'border-danger'
                                : "")}
                            name="products"
                            onChange={this.productChangeHandler}
                            value={this.state.selectedProduct}>
                            <option value="select">Select Product</option>
                            {this
                                .state
                                .products
                                .map(data => <option value={data.product_id}>{data.name}</option>)}
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.products)
                            ? this.state.errors.products
                            : ''}</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <select
                            id="products"
                            className={"form-control " + (this.state.errors.products
                                ? 'border-danger'
                                : "")}
                            name="products"
                            onChange={this.productChangeHandler}
                            value={this.state.selectedProduct}>
                            <option value="select">Select Product</option>
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.products)
                            ? this.state.errors.products
                            : ''}</p>
                    </div>
                );
            }
        }
        return (
            <div>
                <Modal
                    show={this.props.modalIsOpen}
                    size="md"
                    onHide={this.props.closeModal}
                    style={customStyle}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title
                            style={{
                                display: "inline-block"
                            }}>Add Product</Modal.Title>
                    </Modal.Header>

                    <form
                        className="form"
                        onSubmit={this
                            .handleSubmit
                            .bind(this)}>
                        <Modal.Body className="modalBody">


                            <div className="form-body">

                                <div className="row form-group">
                                    <div className="col-md-8">
                                        <div className=" ">
                                            <div className=" ">
                                                <label for="product_name">Product Name</label>
                                                <input
                                                    name='product_name'
                                                    type="text"
                                                    id="product_name"
                                                    className={"form-control " + (this.state.errors.product_name
                                                        ? 'border-danger'
                                                        : "")}
                                                    onChange={this.handleInputChange}
                                                    value={this.state.product_name}
                                                    disabled={true} />
                                                <p className='danger lighten-2'>{(this.state.errors.product_name)
                                                    ? this.state.errors.product_name
                                                    : ''}</p>
                                            </div>
                                        </div>

                                        <div className=" ">
                                            <div className=" ">
                                                <label for="product_url">Product URL</label>
                                                <input
                                                    type="text"
                                                    id="product_url"
                                                    className={"form-control " + (this.state.errors.product_url
                                                        ? 'border-danger'
                                                        : "")}
                                                    name="product_url"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.product_url}
                                                    disabled={true} />
                                                <p className='danger lighten-2'>{(this.state.errors.product_url)
                                                    ? this.state.errors.product_url
                                                    : ''}</p>
                                            </div>
                                            <div className="form-group ">
                                                <div>
                                                    <label>Category</label>
                                                </div>
                                                <div className="">
                                                    <MultiCascader data={this.state.category_options} size="md" className="cascade" onChange={this.handleCategory} placeholder="Please select" />
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div>
                                                    <label className=" " htmlFor="projectinput2">Product</label>
                                                </div>

                                                <div className=" ">
                                                    {getProductsMethod()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div
                                            style={{
                                                textAlign: "center"
                                            }}>
                                            <label
                                                style={{
                                                    textAlign: "left",
                                                    float: "left",
                                                    marginLeft: "15px"
                                                }}>Product picture</label>
                                            <div className="input-group">
                                                <img
                                                    src={this.state.picture}
                                                    className={styles.imgStyle}
                                                    width="270"
                                                    height="250" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={this.props.closeModal}
                                style={{
                                    marginRight: "5px"
                                }}>Close</Button>
                            <Button variant="primary" type="submit" disabled={this.state.isButtonDisabled}>Add Product</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ProductAddModal;