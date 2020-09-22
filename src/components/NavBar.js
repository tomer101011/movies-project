import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

import '../styles/navbar-style.css';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            loggedUserName: ''
        }
    }

    setUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    setPassword = (e) => {
        this.setState({ password: e.target.value });
    }

    login = () => {

        const url = 'http://localhost:9000/login';
        const data = {
            userName: this.state.userName,
            password: this.state.password
        }
        axios.post(url, data)
            .then(result => {
                if (result.data === 'user not found')
                    console.log('user not found');

                else {
                    const cookie = new Cookies();
                    const options = {
                        path: '/',
                        maxAge: 120 * 60 * 1000,
                        sameSite: true
                    }
                    cookie.set('userId', result.data.userId, options);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');
        if (userIdCookie !== undefined) {
            const url = 'http://localhost:9000/login/user';

            axios.post(url, { userId: userIdCookie })
                .then(result => {
                    if (result.data === 'user not found')
                        console.log('user not found');

                    else {
                        console.log(result.data)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else{
            console.log('user did not log in');
        }
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-default navbar-expand-lg navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/movies-project">Movie<b>Mojo</b></a>
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                {/* Collection of nav links, forms, and other content for toggling  */}
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="/#">Login</a>
                            <ul className="dropdown-menu form-wrapper">
                                <li>
                                    <p className="hint-text">Sign in to your account</p>
                                    <div className="form-group">
                                        <input onChange={this.setUserName} type="text" className="form-control" placeholder="Username" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.setPassword} type="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <input onClick={() => this.login()} type="button" className="btn btn-primary btn-block" value="Login" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">Sign up</a>
                            <ul className="dropdown-menu form-wrapper">
                                <li>
                                    <p className="hint-text">Fill in this form to create your account!</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password" required="required" />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block" value="Sign up" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
