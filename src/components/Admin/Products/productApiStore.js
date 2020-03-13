import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TYPE_CATEGORY_VIEW, CATEGORY_SUBCATEGORY_VIEW, SHARAF_DG_API_URL } from '../../Common/Constants';
import Modal from './ProductAddModal';
import {getSharafDGFormData} from '../../Common/utils';
import axios from 'axios';
import { Cascader } from 'antd';
import 'antd/dist/antd.css';

class ProductsAll extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        selectedView: 'select',
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
        activeItemPrice: 0,
        activeItemSalePrice: 0,
        activeItemInStock: 0,
        activeItemDiscount: 0
    }

    openModal = (data) => {
        this.setState({ modalIsOpen: true });
        this.setState({ activeItemName: data.post_title });
        this.setState({ activeItemImages: data.images });
        this.setState({ activeItemPermalink: data.permalink });
        this.setState({ activeItemPrice: data.regular_price });
        this.setState({ activeItemSalePrice: data.sale_price });
        this.setState({ activeItemInStock: data.in_stock });
        this.setState({ activeItemDiscount: data.discount_val });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
        this.setState({ activeItemName: '' });
        this.setState({ activeItemImages: '' });
        this.setState({ activeItemPermalink: '' });
        this.setState({ activeItemPrice: 0 });
        this.setState({ activeItemSalePrice: 0 });
        this.setState({ activeItemInStock: 0 });
        this.setState({ activeItemDiscount: 0 });
    }

    typeChangeHandler = (e) => {
        this.setState({ selectedView: e.target.value });
        this.setState({ selectedCategory: 'select' });
        this.setState({ selectedSubCategory: 'select' });
        this.setState({ pageId: 0 });
    }
    categoryChangeHandler = (e) => {
        this.setState({ selectedCategory: e.target.value });
        this.setState({ selectedSubCategory: 'select' });
        this.setState({ pageId: 0 });
    }
    subCategoryChangeHandler = (e) => {
        this.setState({ selectedSubCategory: e.target.value });
        this.setState({ pageId: 0 });
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
        let type = this.state.selectedView;
        let cat = this.state.selectedCategory;
        let sub_cat = this.state.selectedSubCategory;
        if (type === "select" || cat === "select" || sub_cat === "select") {
            alert("Please select Type, Category and Subcategory first!");
            return;
        }
        let formdata = getSharafDGFormData(type,cat,sub_cat);
        axios.request({
            url: SHARAF_DG_API_URL,
            method: 'post',
            data: formdata,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
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

    }

    render() {
        const { selectedView, selectedCategory, modalIsOpen } = this.state;
        return (
            <>
                {(modalIsOpen) ? <Modal openModal={this.openModal} closeModal={this.closeModal} modalIsOpen={modalIsOpen} product_name={this.state.activeItemName} price={this.state.activeItemPrice} product_url={this.state.activeItemPermalink} sale_price={this.state.activeItemSalePrice} in_stock={this.state.activeItemInStock} discount={this.state.activeItemDiscount} picture={this.state.activeItemImages} /> : null}
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
                                                        options={TYPE_CATEGORY_VIEW}
                                                        onChange={this.handleCategory}
                                                        style={{"display":"block"}}
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
                                                    {this.state.products.map(data => {
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