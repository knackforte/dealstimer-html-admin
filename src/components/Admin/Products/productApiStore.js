import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BABYSHOP_CATEGORIES, SHARAF_DG_CATEGORIES, AMAZON_CATEGORIES, GET_PRODUCTS_API_SCRAPPER_URL } from '../../Common/Constants';
import Modal from './ProductAddModal';
import { getSharafDGFormData, getBabyshopUrl, getAmazonUrl } from '../../Common/utils';
import axios from 'axios';
import { Cascader } from 'antd';
import 'antd/dist/antd.css';

class ProductsAll extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        selectedType: 'select',
        selectedCategory: 'select',
        selectedSubCategory: 'select',
        products: [],
        pageId: 0,
        nextBtnDisabled: true,
        prevBtnDisabled: true,
        modalIsOpen: false,
        activeItemName: '',
        activeItemImages: '',
        activeItemPermalink: '',
        category_options: '',
        storeId: ''
    }
    componentDidMount() {
        let storeId = this.props.match.params.id;
        this.setState({ storeId: storeId });
        switch (storeId) {
            case "2":
                this.setState({ category_options: SHARAF_DG_CATEGORIES });
                break;
            case "3":
                this.setState({ category_options: BABYSHOP_CATEGORIES, pageId: 1 });
                break;
            case "4":
                this.setState({ category_options: AMAZON_CATEGORIES, pageId: 1 });
                break;
        }
    }
    openModal = (data) => {
        this.setState({ modalIsOpen: true });
        this.setState({ activeItemName: data.post_title });
        this.setState({ activeItemImages: data.images });
        this.setState({ activeItemPermalink: data.permalink });
    }

    openModalScrap = (data) => {
        this.setState({ modalIsOpen: true });
        this.setState({ activeItemName: data.name });
        this.setState({ activeItemImages: data.image_url });
        this.setState({ activeItemPermalink: data.permalink });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
        this.setState({ activeItemName: '' });
        this.setState({ activeItemImages: '' });
        this.setState({ activeItemPermalink: '' });
    }
    handleCategory = (value) => {
        this.setState({ selectedType: value[0], selectedCategory: value[1], selectedSubCategory: value[2] });
    }

    nextPageTrigger = (e) => {
        this.setState({ nextBtnDisabled: true });
        this.setState({ pageId: (this.state.pageId + 1) }, () => { this.searchProduct(); });
    }

    prevPageTrigger = (e) => {
        this.setState({ prevBtnDisabled: true });
        this.setState({ pageId: (this.state.pageId - 1) }, () => { this.searchProduct(); });
    }

    searchProduct = () => {

        let storeId = this.props.match.params.id;
        switch (storeId) {
            case "2":
                let type = this.state.selectedType;
                let cat = this.state.selectedCategory;
                let sub_cat = this.state.selectedSubCategory;
                if (type === "select" || cat === "select" || sub_cat === "select") {
                    alert("Please select Type, Category and Subcategory first!");
                    return;
                }
                let formdata = getSharafDGFormData(type, cat, sub_cat, this.state.pageId);
                axios.request({
                    url: GET_PRODUCTS_API_SCRAPPER_URL,
                    method: 'post',
                    data: formdata,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                        store_id: 2,
                    }

                }).then(response => {
                    if (response.data.results[0].hits.length !== 0) {
                        this.setState({ products: response.data.results[0].hits });
                        if (this.state.pageId >= 0) {
                            this.setState({ nextBtnDisabled: false });
                        }
                        if (this.state.pageId > 0) {
                            this.setState({ prevBtnDisabled: false });
                        }

                        if (this.state.pageId === 0) {
                            this.setState({ prevBtnDisabled: true });
                        }
                    } else {
                        this.setState({ nextBtnDisabled: true });
                        if (this.state.pageId === 0) {
                            this.setState({ pageId: 0 });
                            this.setState({ products: [] });
                        }
                    }
                })
                    .catch(e => {
                        alert(e + 'Unable to fetch data from API.');
                    })
                break;
            case "3":
                let type2 = this.state.selectedType;
                let cat2 = this.state.selectedCategory;
                if (type2 === "select" || cat2 === "select") {
                    alert("Please select Type and Category first!");
                    return;
                }
                let scrapUrl = getBabyshopUrl(type2, cat2, this.state.pageId);
                let fData = new FormData();
                fData.append('url', scrapUrl);
                axios.request({
                    url: GET_PRODUCTS_API_SCRAPPER_URL,
                    method: 'post',
                    data: fData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                        store_id: 3,
                    }

                }).then(response => {
                    if (response.data.products.length !== 0) {
                        this.setState({ products: response.data.products });
                        if (this.state.pageId >= 0) {
                            this.setState({ nextBtnDisabled: false });
                        }
                        if (this.state.pageId > 0) {
                            this.setState({ prevBtnDisabled: false });
                        }

                        if (this.state.pageId === 0) {
                            this.setState({ prevBtnDisabled: true });
                        }
                    } else {
                        this.setState({ nextBtnDisabled: true });
                        if (this.state.pageId === 0) {
                            this.setState({ pageId: 0 });
                            this.setState({ products: [] });
                        }
                    }
                })
                    .catch(e => {
                        alert(e + 'Unable to fetch data from API.');
                    })
                break;
            case "4":
                let type3 = this.state.selectedType;
                let cat3 = this.state.selectedCategory;
                let sub_cat2 = this.state.selectedSubCategory;
                if (type3 === "select" || cat3 === "select" || sub_cat2 === "select") {
                    alert("Please select Type, Category and Sub Category first!");
                    return;
                }
                let scrapUrl2 = getAmazonUrl(type3, cat3, sub_cat2, this.state.pageId);
                let fData2 = new FormData();
                fData2.append('url', scrapUrl2);
                axios.request({
                    url: GET_PRODUCTS_API_SCRAPPER_URL,
                    method: 'post',
                    data: fData2,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                        store_id: 4,
                    }

                }).then(response => {
                    if (response.data.products.length !== 0) {
                        this.setState({ products: response.data.products });
                        if (this.state.pageId >= 0) {
                            this.setState({ nextBtnDisabled: false });
                        }
                        if (this.state.pageId > 0) {
                            this.setState({ prevBtnDisabled: false });
                        }

                        if (this.state.pageId === 0) {
                            this.setState({ prevBtnDisabled: true });
                        }
                    } else {
                        this.setState({ nextBtnDisabled: true });
                        if (this.state.pageId === 0) {
                            this.setState({ pageId: 0 });
                            this.setState({ products: [] });
                        }
                    }
                })
                    .catch(e => {
                        alert(e + 'Unable to fetch data from API.');
                    })
                break;
        }



    }

    render() {
        const { modalIsOpen } = this.state;
        return (
            <>
                {(modalIsOpen) ? <Modal openModal={this.openModal} closeModal={this.closeModal} modalIsOpen={modalIsOpen} product_name={this.state.activeItemName} product_url={this.state.activeItemPermalink} picture={this.state.activeItemImages} store_id={this.state.storeId} /> : null}
                <div className="app-content content container-fluid" >
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-6 col-xs-12 mb-1">
                                <h2 className="content-header-title">Product API Store</h2>
                            </div>
                            <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                                <div className="breadcrumb-wrapper col-xs-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active"><Link to="/products/api-stores">Products API</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Product API Store
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
                                            <div className="form mb-0">
                                                <div className="form-body">
                                                    <div className="form-group row">
                                                        <div className=" col-md-11">
                                                            <Cascader
                                                                options={this.state.category_options}
                                                                onChange={this.handleCategory}
                                                                style={{ "display": "block" }}
                                                                name="category_id"
                                                            />

                                                        </div>

                                                        <div className="col-md-1">
                                                            <button type="submit" className="btn btn-primary" onClick={this.searchProduct}>
                                                                <i className="icon-search"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                        <th>Name</th>
                                                        <th>Price (AED)</th>
                                                        <th>Picture</th>
                                                        <th>Shop Link</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(this.state.storeId === "2") ?
                                                        this.state.products.map(data => {
                                                            return (
                                                                <tr>
                                                                    <th scope="row">{data.post_id}</th>
                                                                    <td>{data.post_title}</td>
                                                                    <td>{data.price}</td>
                                                                    <td><img style={{ width: "50px", height: "50px" }} src={data.images} alt="Product Image" /></td>
                                                                    <td><a href={data.permalink} target="_blank" rel="noopener noreferrer">{data.permalink}</a></td>
                                                                    <td><button className="btn btn-primary" onClick={() => this.openModal(data)}>Add Product</button></td>
                                                                </tr>
                                                            )
                                                        })
                                                        : null
                                                    }
                                                    {(this.state.storeId === "3") ?
                                                        this.state.products.map(data => {
                                                            return (
                                                                <tr>
                                                                    <th scope="row">{}</th>
                                                                    <td>{data.name}</td>
                                                                    <td>{data.price}</td>
                                                                    <td><img style={{ width: "50px", height: "50px" }} src={data.image_url} alt="Product Image" /></td>
                                                                    <td><a href={data.permalink} target="_blank" rel="noopener noreferrer">{data.permalink}</a></td>
                                                                    <td><button className="btn btn-primary" onClick={() => this.openModalScrap(data)}>Add Product</button></td>
                                                                </tr>
                                                            )
                                                        })
                                                        : null
                                                    }
                                                    {(this.state.storeId === "4") ?
                                                        this.state.products.map(data => {
                                                            return (
                                                                <tr>
                                                                    <th scope="row">{}</th>
                                                                    <td>{data.name}</td>
                                                                    <td>{data.price}</td>
                                                                    <td><img style={{ width: "50px", height: "50px" }} src={data.image_url} alt="Product Image" /></td>
                                                                    <td><a href={data.permalink} target="_blank" rel="noopener noreferrer">{data.permalink}</a></td>
                                                                    <td><button className="btn btn-primary" onClick={() => this.openModalScrap(data)}>Add Product</button></td>
                                                                </tr>
                                                            )
                                                        })
                                                        : null
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" style={{ textAlign: 'left' }}>
                                <button type="button" className="btn btn-secondary" disabled={this.state.prevBtnDisabled} onClick={this.prevPageTrigger}>{"<"} Previous Page</button>
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'right' }}>
                                <button type="button" className="btn btn-secondary" disabled={this.state.nextBtnDisabled} onClick={this.nextPageTrigger}>Next Page {">"}</button>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}

export default ProductsAll;