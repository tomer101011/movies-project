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
            newUserName: '',
            newPassword: '',
            confirmPassword: '',
            loggedUserName: ''
        }
    }

    setUserName = (e) => { this.setState({ userName: e.target.value }); }

    setPassword = (e) => { this.setState({ password: e.target.value }); }

    setNewUserName = (e) => { this.setState({ newUserName: e.target.value }); }

    setNewPassword = (e) => { this.setState({ newPassword: e.target.value }); }

    setConfirmPassword = (e) => { this.setState({ confirmPassword: e.target.value }); }


    login = () => {

        if (this.state.userName === '' || this.state.password === '')
            alert('User name or password can\'t be empty');
        else {
            const url = 'http://localhost:9000/login';
            const data = {
                userName: this.state.userName,
                password: this.state.password
            }
            axios.post(url, data)
                .then(result => {
                    if (result.data === 'user not found')
                        alert('User name or password incorrect');

                    else {
                        const cookie = new Cookies();
                        const options = {
                            path: '/',
                            maxAge: 120 * 60 * 1000,
                            httponly: true,
                            sameSite: true
                        }
                        cookie.set('userId', result.data.userId, options);
                        this.setState({ loggedUserName: result.data.userName });
                        window.location.reload(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    signUp = () => {
        if (this.state.newUserName === '' || this.state.newPassword === '' || this.state.confirmPassword === '')
            alert('Credentials can\'t be empty');

        else if (this.state.newPassword !== this.state.confirmPassword)
            alert('You need to confirm the password');

        else {
            const url = 'http://localhost:9000/signup';
            const data = {
                newUserName: this.state.newUserName,
                newPassword: this.state.newPassword
            }
            axios.post(url, data)
                .then(result => {
                    if (result.data === 'user name taken')
                        alert('User name already taken');
                        
                    else {
                        const cookie = new Cookies();
                        const options = {
                            path: '/',
                            maxAge: 120 * 60 * 1000,
                            httponly: true,
                            sameSite: true
                        }
                        cookie.set('userId', result.data.userId, options);
                        this.setState({ loggedUserName: result.data.userName });
                        window.location.reload(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    logOut = () => {
        const cookie = new Cookies();
        cookie.remove('userId');
        this.setState({ loggedUserName: '', userName: '', password: '' });
        window.location.reload(false);
    }

    componentDidMount() {

        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');
        if (userIdCookie !== undefined) {
            const url = 'http://localhost:9000/login/user';

            axios.post(url, { userId: userIdCookie })
                .then(result => {
                    if (result.data === 'user not found')
                        console.log('not found');

                    else
                        this.setState({ loggedUserName: result.data });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    loadLogButtons = () => {
        if (this.state.loggedUserName !== '') {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">Welcome {this.state.loggedUserName}</a>
                        <ul className="dropdown-menu form-wrapper">
                            <li className="center-li">
                                <input type="button" className="fav-style btn btn-primary btn-block" value="Watch favorites" />
                                <button onClick={() => this.logOut()} className="logout-text">Log out</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
        else {
            return (
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
                                    <input onChange={this.setNewUserName} type="text" className="form-control" placeholder="Username" required="required" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.setNewPassword} type="password" className="form-control" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.setConfirmPassword} type="password" className="form-control" placeholder="Confirm Password" required="required" />
                                </div>
                                <input onClick={() => this.signUp()} type="submit" className="btn btn-primary btn-block" value="Sign up" />
                            </li>
                        </ul>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-default navbar-expand-lg navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Movie<b>Mojo</b></a>
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                {/* Collection of nav links, forms, and other content for toggling  */}
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    {this.loadLogButtons()}
                </div>
            </nav>
        )
    }
}
