import React, { Component } from 'react';
import './Login.css';
import dealstimer from '../../assets/images/dealstimer.png';
import { validateAll } from 'indicative/validator';
import axios from 'axios';
import auth from '../Auth/Auth';
class Login extends Component {
    constructor (props) {
        super(props);
        if (auth.isAuthenticated() === "false") {
            this.props.history.push('/');
        } else {
            this.props.history.push('/dashboard');
        }
    }
    state = {
        email: '',
        password: '',
        isButtonDisabled: '',
        error: ''
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            email: 'required|email',
            password: 'required|string'
        };

        const messages = {
            required: 'The field is required',
            email: 'Please Enter valid email address'
        }

        validateAll(data, rules, messages).then(() => {
            this.setState({ isButtonDisabled: true });
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            axios.post('http://clientdemo.knackforte.com/apidealstimer/public/api/verifyUser', {
                email: this.state.email,
                password: this.state.password
            }, config).then(response => {
                localStorage.setItem('isAuth', true);
                this.setState({ error: false });
                //this.props.history.push("/dashboard");
                window.location.href = "/dashboard";
                //this.props.history.push('/Dashboard');
            }).catch(e => {
                this.setState({ error: true });
                this.setState({ isButtonDisabled: false });
            })
        }).catch((errors) => {
            const formattedErrors = {}
            errors.forEach(error => formattedErrors[error.field] = error.message);
            this.setState({ errors: formattedErrors });
        })
    }
    getErrorMsg() {
        if (this.state.error) {
            return (
                <div class="alert alert-danger mb-2" role="alert">
                    <strong>Invalid Email or Password!</strong>
                </div>
            );
        }
    }
    render() {

        return (
            <div className="app-content container-fluid login">
                <div className="content-wrapper">
                    <div className="content-header row"></div>
                    <div className="content-body">
                        <section className="flexbox-container">
                            <div className="col-md-4 offset-md-4 col-xs-10 offset-xs-1  box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 m-0">
                                    <div className="card-header no-border">
                                        <div className="card-title text-xs-center">
                                            <div className="p-1">
                                                {/* Image */}
                                                <img className="logo-login" src={dealstimer} alt="branding logo" />
                                            </div>
                                        </div>
                                        <h6
                                            className="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2">
                                            <span>Login with DEALSTIMER</span>
                                        </h6>
                                    </div>
                                    <div className="card-body collapse in">
                                        <div className="card-block">
                                            <form className="form-horizontal form-simple" onSubmit={this.handleSubmit}>
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input
                                                        name='email'
                                                        type='email'
                                                        className="form-control form-control-lg input-lg "
                                                        id="user-name"
                                                        placeholder="Your Email"
                                                        required
                                                        onChange={this.handleInputChange} />
                                                    <div className="form-control-position">
                                                        <i className="icon-head"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left passfield">
                                                    <input
                                                        name='password'
                                                        type="password"
                                                        className="form-control form-control-lg input-lg"
                                                        id="user-password"
                                                        placeholder="Enter Password"
                                                        required
                                                        onChange={this.handleInputChange} />
                                                    <div className="form-control-position">
                                                        <i className="icon-key3"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group row">
                                                    <div className="col-md-6 col-xs-12 text-xs-center text-md-left">
                                                        <fieldset>
                                                            <input type="checkbox" id="remember-me" className="chk-remember" />
                                                            <label htmlFor="remember-me">&nbsp;Remember Me</label>
                                                        </fieldset>
                                                    </div>
                                                </fieldset>
                                                {this.getErrorMsg()}
                                                <button
                                                    type="submit"
                                                    className={this.state.isButtonDisabled
                                                        ? 'btn btn-primary btn-lg btn-block:btn btn-primary btn-lg btn-block disabled'
                                                        : 'btn btn-primary btn-lg btn-block:btn btn-primary btn-lg btn-block'}>
                                                    <i className="icon-unlock2"></i>
                                                    &nbsp;Login
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        )
    }
}
export default Login;