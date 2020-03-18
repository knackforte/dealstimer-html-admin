import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";
import {validateAll} from 'indicative/validator';
import {Cascader} from 'antd';
import 'antd/dist/antd.css';
import styles from './ProductModal.module.css';
import axios from 'axios';
import '../../../app-assets/css/customModal.css';
import {
    TYPE_CATEGORY_VIEW,
    CATEGORY_SUBCATEGORY_VIEW,
    ADD_PRODUCT_MODAL_API_URL,
    GET_PRODUCT_TYPES_API_URL,
    GET_PRODUCT_CATEGORIES_API_URL,
    GET_ADMIN_PRODUCTS_API_URL
} from '../../Common/Constants';

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
    selectedSubCategory: 'select',
    selectedProduct: 'select',
    productTypes: [],
    productCategories: [],
    productSubcategories: [],
    products: []
};

class ProductAddModal extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.setState({product_name: this.props.product_name});
        this.setState({price: this.props.price});
        this.setState({discount: this.props.discount});
        this.setState({sale_price: this.props.sale_price});
        this.setState({in_stock: this.props.in_stock});
        this.setState({product_url: this.props.product_url});
        this.setState({picture: this.props.picture});

        let config = {
            headers: {
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
            }
        }
        axios.post(GET_PRODUCT_TYPES_API_URL, {}, config).then(response => {
            this.setState({productTypes: response.data});
        }).catch(e => {
            alert("Error getting product types from API.");
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

    typeChangeHandler = (e) => {
        this.setState({selectedView: e.target.value});
        this.setState({type: e.target.value});
        this.setState({selectedCategory: 'select'});
        this.setState({selectedSubCategory: 'select'});
        this.setState({selectedProduct: 'select'});

        if (e.target.value !== "select") {
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            let formData = new FormData();
            formData.append('typeName', e.target.value);
            axios
                .post(GET_PRODUCT_CATEGORIES_API_URL, formData, config)
                .then(response => {
                    this.setState({productCategories: response.data});
                })
                .catch(e => {
                    alert("Error getting product categories from API.");
                })
        }

    }
    categoryChangeHandler = (e) => {
        this.setState({selectedCategory: e.target.value});
        this.setState({category: e.target.value});
        this.setState({selectedSubCategory: 'select'});
        this.setState({selectedProduct: 'select'});
        if (e.target.value !== "select") {
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            let formData = new FormData();
            formData.append('catName', e.target.value);
            // axios.post(GET_PRODUCT_SUBCATEGORIES_API_URL, formData, config)
            // .then(response => {         this.setState({ productSubcategories:
            // response.data });     })     .catch(e => {         alert("Error getting
            // product sub-categories from API.");     })
        }
    }
    subCategoryChangeHandler = (e) => {
        this.setState({selectedSubCategory: e.target.value});
        this.setState({subCategory: e.target.value});
        this.setState({selectedProduct: 'select'});

        if (e.target.value !== "select") {
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            let formData = new FormData();
            formData.append('typeName', this.state.type);
            formData.append('catName', this.state.category);
            formData.append('subCatName', e.target.value);
            axios
                .post(GET_ADMIN_PRODUCTS_API_URL, formData, config)
                .then(response => {
                    this.setState({products: response.data});
                })
                .catch(e => {
                    alert("Error getting products from API.");
                })
        }
    }
    productChangeHandler = (e) => {
        this.setState({selectedProduct: e.target.value});
        this.setState({products: e.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            product_name: "required|string",
            price: "required",
            product_url: "required",
            type: "required",
            category: "required",
            subCategory: "required"
        };

        const messages = {
            required: 'The field is required'
        }

        validateAll(data, rules, messages).then(() => {
            this.setState({errors: "{}"});
            this.setState({isButtonDisabled: true});
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

            axios
                .post(ADD_PRODUCT_MODAL_API_URL, formData, config)
                .then(response => {
                    alert("Product has been saved successfully!");
                    this.resetState();
                    this
                        .props
                        .closeModal();
                })
                .catch(e => {
                    alert(e.response.data);
                    this.setState({isButtonDisabled: false});
                })
        }).catch((errors) => {
            const formattedErrors = {}
            errors.forEach(error => formattedErrors[error.field] = error.message)
            this.setState({errors: formattedErrors})
        })
    }
    render() {
        const customStyle = {
            top: "20px",
            opacity: 1
        };

        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            }, {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men'
                            }
                        ]
                    }
                ]
            }
        ];

        const getCategoryMethod = () => {
            if (this.state.selectedView !== "select") {
                return (
                    <div>
                        <select
                            id="category"
                            className={"form-control " + (this.state.errors.category
                            ? 'border-danger'
                            : "")}
                            name="category"
                            onChange={this.categoryChangeHandler}
                            value={this.state.selectedCategory}>
                            <option value='select'>Select Category</option>
                            {this
                                .state
                                .productCategories
                                .map(data => <option value={data.name}>{data.display_name}</option>)}
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.category)
                                ? this.state.errors.category
                                : ''}</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <select
                            id="category"
                            className={"form-control " + (this.state.errors.category
                            ? 'border-danger'
                            : "")}
                            name="category"
                            onChange={this.categoryChangeHandler}
                            value={this.state.selectedCategory}>
                            <option value='select'>Select Category</option>
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.category)
                                ? this.state.errors.category
                                : ''}</p>
                    </div>
                );
            }
        }
        const getProductsMethod = () => {
            if (this.state.selectedProduct !== "select") {
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
                                .map(data => <option value={data.name}>{data.display_name}</option>)}
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
        const getSubCategoryMethod = () => {
            if (this.state.selectedCategory !== "select") {
                return (
                    <div>
                        <select
                            id="subCategory"
                            className={"form-control " + (this.state.errors.subCategory
                            ? 'border-danger'
                            : "")}
                            name="subCategory"
                            onChange={this.subCategoryChangeHandler}
                            value={this.state.selectedSubCategory}>
                            <option value="select">Select Subcategory</option>
                            {this
                                .state
                                .productSubcategories
                                .map(data => <option value={data.name}>{data.display_name}</option>)}
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.subCategory)
                                ? this.state.errors.subCategory
                                : ''}</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <select
                            id="subCategory"
                            className={"form-control " + (this.state.errors.subCategory
                            ? 'border-danger'
                            : "")}
                            name="subCategory"
                            onChange={this.subCategoryChangeHandler}
                            value={this.state.selectedSubCategory}>
                            <option value="select">Select Subcategory</option>
                        </select>
                        <p className='danger lighten-2'>{(this.state.errors.subCategory)
                                ? this.state.errors.subCategory
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
                            <div>

                            
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
                                                    disabled={true}/>
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
                                                    disabled={true}/>
                                                <p className='danger lighten-2'>{(this.state.errors.product_url)
                                                        ? this.state.errors.product_url
                                                        : ''}</p>
                                            </div>
                                            <div className="form-group ">
                                                <div>
                                                    <label>Catagory</label>
                                                </div>
                                                <div className="col-12">
                                                    <Cascader options={options}  className={styles.cascade} placeholder="Please select"/>
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
                                                    height="250"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="row">
                                        <label className="col-md-1" htmlFor="projectinput2">Product:</label>
                                        <div className="col-md-7">
                                            {getProductsMethod()}
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </Modal.Body>
                    </form>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.props.closeModal}
                            style={{
                            marginRight: "5px"
                        }}>Close</Button>
                        <Button variant="primary" type="submit" disabled={this.state.isButtonDisabled}>Add Product</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }
}

export default ProductAddModal;