import React, {Component} from 'react';
import {validateAll} from 'indicative/validator';
import {DropzoneArea} from 'material-ui-dropzone'
import axios from 'axios';
class New extends Component {
    state = {
        firstName: "",
        lastName: "",
        username:"",
        email: "",
        password: "",
        password_confirmation: "",
        phoneNo:"",
        address:"",
        gender:"",
        storeName:"",
        storeUrl:"",
        country:"",
        state:"",
        city:"",
        zip:"",
        longitude:"",
        latitude:"",
        streetAddress:"",
        errors: {},
        isButtonDisabled: false,
        files:[]
    }
    handleFileChange = (files)=>{
        console.log('Handle file change');
        this.setState({
            files: files
          });
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const data = this.state;
        const rules = {
            firstName: 'required|string',
            lastName: 'required|string',
            username: 'required|string',
            email: 'required|email',
            password: 'required|string|min:8|confirmed',
            password_confirmation:'required|string',
            storeName:'required|string'
        };

        const messages = {
            required: 'The field is required',
            email: 'Please Enter valid email address',
            min: 'The value must be greater than eight characters.',
            confirmed:'Confirm password does not match'
        }

        validateAll(data, rules, messages)
            .then(() => {
                this.setState({
                    isButtonDisabled: true
                });
                let config = {
                    headers: {
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                    }
                }
                axios.post('http://clientdemo.knackforte.com/apidealstimer/api/user', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    password_confirmation: this.state.password_confirmation,
                    firstName: this.state.firstName,
                    lastName:  this.state.lastName,
                    username:this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    phoneNo:this.state.phoneNo,
                    address:this.state.address,
                    gender:this.state.gender,
                    storeName:this.storeName,
                    storeUrl:this.state.storeUrl,
                    country:this.state.country,
                    city:this.state.city,
                    zip:this.state.zip,
                    longitude:this.state.longitude,
                    latitude:this.state.latitude,
                    streetAddress:this.state.streetAddress,
                    files:this.state.files
                }, config)
                    .then(response => {
                        localStorage.setItem('isAuth', true);
                        window.location.href = "/Dashboard";
                        //this.props.history.push('/Dashboard');
                    })
                    .catch(e => {
                        alert("Error while Signing up!");
                        this.setState({
                            isButtonDisabled: false
                        });
                    })
            })
            .catch((errors) => {
                console.log(errors);
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                this.setState({ errors: formattedErrors })
            })
    }
    render()
    {
        return (
            <div className="app-content content container-fluid">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-xs-12 mb-1">
                            <h2 className="content-header-title">Add New Vendor</h2>
                        </div>
                        <div
                            className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper col-xs-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Users</a>
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
                                    <h4 className="card-title" id="basic-layout-form">Vendor Profile</h4>
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
                                                                <label for="projectinput1">First Name(Required)
                                                                </label> 
                                                                <input name='firstName' type="text" id="projectinput1" className={"form-control " + (this.state.errors.firstName?'border-danger':"") } onChange={this.handleInputChange}/>
                                                                <p className='danger lighten-2'>{(this.state.errors.firstName)?this.state.errors.firstName:''}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Last Name(Required)
                                                                </label>
                                                                <input name='lastName' type="text" id="projectinput1" className={"form-control " + (this.state.errors.lastName?'border-danger':"") } onChange={this.handleInputChange}/>
                                                                <p className='danger lighten-2'>{(this.state.errors.lastName)?this.state.errors.lastName:''}</p>
                                                                </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-12">
                                                                <label for="projectinput1">Username
                                                                </label>
                                                                <input type="text" id="projectinput1" className={"form-control " + (this.state.errors.username?'border-danger':"") } name="username" onChange={this.handleInputChange}/>
                                                                <p className='danger lighten-2'>{(this.state.errors.username)?this.state.errors.username:''}</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Email</label>
                                                                <input type="email" id="projectinput1" className={"form-control " + (this.state.errors.email?'border-danger':"") } name="email" onChange={this.handleInputChange}/>
                                                                <p className='danger lighten-2'>{(this.state.errors.email)?this.state.errors.email:''}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Cell#</label>
                                                                <p className='danger lighten-2'><input type="tel" id="projectinput1" className="form-control" name="phoneNumber" onChange={this.handleInputChange}/></p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Password(Required)</label>
                                                                <input type="password" id="projectinput1"className={"form-control " + (this.state.errors.password?'border-danger':"") } name="password" onChange={this.handleInputChange}/>
                                                                <p className='danger lighten-2'>{(this.state.errors.password)?this.state.errors.password:''}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Confirm Password(Required)</label>
                                                                <input type="password" id="projectinput1" className={"form-control " + (this.state.errors.password_confirmation?'border-danger':"") } name="password_confirmation" onChange={this.handleInputChange}/>
                                                                <p className='danger lighten-2'>{(this.state.errors.password_confirmation)?this.state.errors.password_confirmation:''}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group" style={{textAlign: "center"}}>
                                                            <label style={{textAlign: "left", float: "left",marginLeft: "15px"}}>Profile picture</label>
                                                            <div className="input-group">
                                                                <DropzoneArea
                                                                    dropzoneText='Add Profile Picture'
                                                                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                                                    onChange={this.fileChanged}
                                                                    filesLimit={1}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-8">
                                                        <label for="projectinput1">Address</label>
                                                        <textarea
                                                            name="address"
                                                            onChange={this.handleInputChange}
                                                            className="form-control"
                                                            cols="30"
                                                            rows="3"
                                                            placeholder="Enter attribute values separated by '|'."></textarea>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="projectinput1">Gender</label>
                                                        <select name="gender" id="" className="form-control" onChange={this.handleInputChange}>
                                                            <option value="">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row p-0">
                                                    <div className="col-md-6">
                                                        <hr className="m-0"/></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 pt-2">
                                                        <h4>Store Detail</h4>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4">
                                                        <label for="projectinput1">Store Name
                                                        </label>
                                                        <input type="text" id="projectinput1" className={"form-control " + (this.state.errors.storeName?'border-danger':"") } name="storeName" onChange={this.handleInputChange}/>
                                                        <p className='danger lighten-2'>{(this.state.errors.storeName)?this.state.errors.storeName:''}</p>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <label for="projectinput1">Store URL
                                                        </label>
                                                        <input type="text" id="projectinput1" className="form-control" name="storeUrl" onChange={this.handleInputChange}/></div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-3">
                                                        <label for="projectinput1">Country
                                                        </label>
                                                        <input type="text" id="projectinput1" className="form-control" name="country" onChange={this.handleInputChange}/></div>
                                                    <div className="col-md-3">
                                                        <label for="projectinput1">State
                                                        </label>
                                                        <input type="text" id="projectinput1" className="form-control" name="state" onChange={this.handleInputChange}/></div>
                                                    <div className="col-md-3">
                                                        <label for="projectinput1">City</label>
                                                        <input type="text" id="projectinput1" className="form-control" name="city" onChange={this.handleInputChange}/></div>
                                                    <div className="col-md-3">
                                                        <label for="projectinput1">Zip
                                                        </label>
                                                        <input type="text" id="projectinput1" className="form-control" name="zip" onChange={this.handleInputChange}/></div>
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
                                                                <label for="projectinput1">Latitude
                                                                </label>
                                                                <input type="text" id="projectinput1" className="form-control" name="latitude" onChange={this.handleInputChange}/></div>
                                                            <div className="col-md-6">
                                                                <label for="projectinput1">Longitude
                                                                </label>
                                                                <input type="text" id="projectinput1" className="form-control" name="longitude" onChange={this.handleInputChange}/></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="projectinput1">Street Address</label>
                                                        <textarea name="streetAddress" className="form-control" cols="30" rows="3" onChange={this.handleInputChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <button type="button" className="btn btn-warning mr-1">
                                                    <i className="icon-cross2"></i>
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-primary">
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
export default New;