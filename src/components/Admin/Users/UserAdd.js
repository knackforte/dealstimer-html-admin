import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { validateAll } from 'indicative/validator';
import { DropzoneArea } from 'material-ui-dropzone';
import { ADD_VENDOR_API_URL } from '../../Common/Constants';
import axios from 'axios';
class UserAdd extends Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        cell_no: "",
        address: "",
        gender: "",
        store_name: "",
        store_url: "",
        country: "",
        state: "",
        city: "",
        zip: "",
        longitude: "",
        latitude: "",
        street_address: "",
        errors: {},
        isButtonDisabled: false,
        picture: []
    }
    handleFileChange = (picture) => {
        this.setState({
            picture: picture
        });
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            first_name: 'required|string',
            last_name: 'required|string',
            username: 'required|string',
            email: 'required|email',
            password: 'required|string|min:8|confirmed',
            password_confirmation: 'required|string',
            store_name: 'required|string'
        };

        const messages = {
            required: 'The field is required',
            email: 'Please Enter valid email address',
            min: 'The value must be greater than eight characters.',
            confirmed: 'Confirm password does not match'
        }

        validateAll(data, rules, messages)
            .then(() => {

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
                formData.append('email', this.state.email);
                formData.append('password', this.state.password);
                formData.append('password_confirmation', this.state.password_confirmation);
                formData.append('first_name', this.state.first_name);
                formData.append('last_name', this.state.last_name);
                formData.append('username', this.state.username);
                formData.append('cell_no', this.state.cell_no);
                formData.append('address', this.state.address);
                formData.append('gender', this.state.gender);
                formData.append('store_name', this.state.store_name);
                formData.append('store_url', this.state.store_url);
                formData.append('country', this.state.country);
                formData.append('city', this.state.city);
                formData.append('zip', this.state.zip);
                formData.append('longitude', this.state.longitude);
                formData.append('latitude', this.state.latitude);
                formData.append('street_address', this.state.street_address);
                formData.append('picture', this.state.picture[0]);
                formData.append('role', "vendor");
                axios.post(ADD_VENDOR_API_URL, formData, config)
                    .then(response => {
                        localStorage.setItem('isAuth', true);
                        this.props.history.push('/users/all');
                        //this.props.history.push('/Dashboard');
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
                            <h2 className="content-header-title">User Manager</h2>
                        </div>
                        <div
                            className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Add User
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" id="basic-layout-form">Add User</h4>
                                    <a className="heading-elements-toggle">
                                        <i className="icon-ellipsis font-medium-3"></i>
                                    </a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li>
                                                <a data-action="expand">
                                                    <i className="icon-expand2"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body collapse in">
                                    <div className="card-block">
                                        <form className="form" onSubmit={this.handleSubmit}>
                                            <div className="form-body">

                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="form-group row">
                                                            <div className="col-md-6">
                                                                <label for="first_name">First Name(Required)
                                                                </label>
                                                                <input name='first_name' type="text" id="first_name" className={"form-control " + (this.state.errors.first_name ? 'border-danger' : "")} onChange={this.handleInputChange} />
                                                                <p className='danger lighten-2'>{(this.state.errors.first_name) ? this.state.errors.first_name : ''}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label for="last_name">Last Name(Required)
                                                                </label>
                                                                <input name='last_name' type="text" id="last_name" className={"form-control " + (this.state.errors.last_name ? 'border-danger' : "")} onChange={this.handleInputChange} />
                                                                <p className='danger lighten-2'>{(this.state.errors.last_name) ? this.state.errors.last_name : ''}</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-12">
                                                                <label for="username">Username
                                                                </label>
                                                                <input type="text" id="username" className={"form-control " + (this.state.errors.username ? 'border-danger' : "")} name="username" onChange={this.handleInputChange} />
                                                                <p className='danger lighten-2'>{(this.state.errors.username) ? this.state.errors.username : ''}</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-6">
                                                                <label for="email">Email</label>
                                                                <input type="email" id="email" className={"form-control " + (this.state.errors.email ? 'border-danger' : "")} name="email" onChange={this.handleInputChange} />
                                                                <p className='danger lighten-2'>{(this.state.errors.email) ? this.state.errors.email : ''}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label for="cell_no">Cell#</label>
                                                                <p className='danger lighten-2'><input type="tel" id="cell_no" className="form-control" name="cell_no" onChange={this.handleInputChange} /></p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-6">
                                                                <label for="password">Password(Required)</label>
                                                                <input type="password" id="password" className={"form-control " + (this.state.errors.password ? 'border-danger' : "")} name="password" onChange={this.handleInputChange} />
                                                                <p className='danger lighten-2'>{(this.state.errors.password) ? this.state.errors.password : ''}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label for="password_confirmation">Confirm Password(Required)</label>
                                                                <input type="password" id="password_confirmation" className={"form-control " + (this.state.errors.password_confirmation ? 'border-danger' : "")} name="password_confirmation" onChange={this.handleInputChange} />
                                                                <p className='danger lighten-2'>{(this.state.errors.password_confirmation) ? this.state.errors.password_confirmation : ''}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group" style={{ textAlign: "center" }}>
                                                            <label style={{ textAlign: "left", float: "left", marginLeft: "15px" }}>Profile picture</label>
                                                            <div className="input-group">
                                                                <DropzoneArea
                                                                    dropzoneText='Add Profile Picture'
                                                                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                                                    onChange={this.handleFileChange}
                                                                    filesLimit={1}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-8">
                                                        <label for="address">Address</label>
                                                        <textarea
                                                            name="address"
                                                            onChange={this.handleInputChange}
                                                            className="form-control"
                                                            cols="30"
                                                            rows="3"
                                                            placeholder="Enter attribute values separated by '|'."></textarea>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="gender">Gender</label>
                                                        <select name="gender" id="gender" className="form-control" onChange={this.handleInputChange}>
                                                            <option value="">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row p-0">
                                                    <div className="col-md-6">
                                                        <hr className="m-0" /></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 pt-2">
                                                        <h4>Store Detail</h4>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4">
                                                        <label for="store_name">Store Name
                                                        </label>
                                                        <input type="text" id="store_name" className={"form-control " + (this.state.errors.store_name ? 'border-danger' : "")} name="store_name" onChange={this.handleInputChange} />
                                                        <p className='danger lighten-2'>{(this.state.errors.store_name) ? this.state.errors.store_name : ''}</p>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <label for="store_url">Store URL
                                                        </label>
                                                        <input type="text" id="store_url" className="form-control" name="store_url" onChange={this.handleInputChange} /></div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-3">
                                                        <label for="country">Country
                                                        </label>
                                                        <input type="text" id="country" className="form-control" name="country" onChange={this.handleInputChange} /></div>
                                                    <div className="col-md-3">
                                                        <label for="state">State
                                                        </label>
                                                        <input type="text" id="state" className="form-control" name="state" onChange={this.handleInputChange} /></div>
                                                    <div className="col-md-3">
                                                        <label for="city">City</label>
                                                        <input type="text" id="city" className="form-control" name="city" onChange={this.handleInputChange} /></div>
                                                    <div className="col-md-3">
                                                        <label for="zip">Zip
                                                        </label>
                                                        <input type="text" id="zip" className="form-control" name="zip" onChange={this.handleInputChange} /></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label for="" className="small">Please find on Map</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label for="latitude">Latitude
                                                                </label>
                                                                <input type="text" id="latitude" className="form-control" name="latitude" onChange={this.handleInputChange} /></div>
                                                            <div className="col-md-6">
                                                                <label for="longitude">Longitude
                                                                </label>
                                                                <input type="text" id="longitude" className="form-control" name="longitude" onChange={this.handleInputChange} /></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="street_address">Street Address</label>
                                                        <textarea name="street_address" className="form-control" cols="30" rows="3" onChange={this.handleInputChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <button type="submit" className={'btn btn-primary ' + (this.state.isButtonDisabled ? 'disabled' : '')}>
                                                    <i className="icon-check2"></i>
                                                    Save
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
        )
    }
}
export default UserAdd;