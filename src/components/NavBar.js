import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../styles/navbar-style.css';

import axios from 'axios';
import Cookies from 'universal-cookie';
import { server_path } from '../constants/server.js';
import *  as ROUTES from '../constants/routes.js';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',//login user name
            password: '',// login password
            isManager: false,// is the current user the manager
            newUserName: '',// signup user name
            newPassword: '',// signup new password
            confirmPassword: '',// signup confirm password
            loggedUserName: ''// current logged in user name
        }
    }

    //get the user name based on userId on every refresh after he logs in
    componentDidMount() {

        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');

        //if the user is logged in, then get his user name
        if (userIdCookie !== undefined) {
            const url = `${server_path}/login/user`;

            axios.post(url, { userId: userIdCookie })
                .then(result => {
                    if (result.data === 'user not found')
                        console.log('not found');

                    else
                        this.setState({ loggedUserName: result.data.userName, isManager: result.data.isManager });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    //set States based on inputs
    setUserName = (e) => { this.setState({ userName: e.target.value }); }

    setPassword = (e) => { this.setState({ password: e.target.value }); }

    setNewUserName = (e) => { this.setState({ newUserName: e.target.value }); }

    setNewPassword = (e) => { this.setState({ newPassword: e.target.value }); }

    setConfirmPassword = (e) => { this.setState({ confirmPassword: e.target.value }); }


    //login to the web app
    login = () => {
        //check input validations
        if (this.state.userName === '' || this.state.password === '')
            alert('User name or password can\'t be empty');

        else {
            const url = `${server_path}/login`;
            const data = {
                userName: this.state.userName,
                password: this.state.password
            }
            //check validation based on user name or password on the database
            axios.post(url, data)
                .then(result => {
                    //if the user is not found
                    if (result.data === 'user not found')
                        alert('User name or password incorrect');

                    //given user name and password match the database one
                    //set a cookie "userId" so after every refresh, the user won't need to log again
                    else {
                        const cookie = new Cookies();
                        const options = {
                            path: '/',
                            maxAge: 120 * 60 * 1000,
                            httponly: true,
                            sameSite: true
                        }
                        cookie.set('userId', result.data.userId, options);
                        window.location.reload(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    //sign up to the web app
    signUp = () => {
        //check input validations
        if (this.state.newUserName === '' || this.state.newPassword === '' || this.state.confirmPassword === '')
            alert('Credentials can\'t be empty');

        else if (this.state.newPassword !== this.state.confirmPassword)
            alert('You need to confirm the password');

        else {
            const url = `${server_path}/signup`;
            const data = {
                newUserName: this.state.newUserName,
                newPassword: this.state.newPassword
            }

            //sign up the new user
            axios.post(url, data)
                .then(result => {
                    if (result.data === 'user name taken')
                        alert('User name already taken');

                    else {
                        //set a cookie "userId" so after every refresh, the user won't need to log again
                        const cookie = new Cookies();
                        const options = {
                            path: '/',
                            maxAge: 120 * 60 * 1000,
                            httponly: true,
                            sameSite: true
                        }
                        cookie.set('userId', result.data.userId, options);
                        window.location.reload(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    //log out from the web app and destroy the "userId" cookie
    //destroy the "userId" cookie and refresh the current 
    //page if the user is on the home page to remove the swipers accessible only to the user
    logOut = () => {
        const cookie = new Cookies();
        cookie.remove('userId', { path: '/' });

        //refresh the current page if the user is on the home page to remove
        //the swipers accessible only to the user
        const pageHref = window.location.href;
        const pageLocation = pageHref.substr(pageHref.indexOf('#') + 1);
        this.setState({ loggedUserName: 'logged out' });
        if (pageLocation === ROUTES.HOME)
            window.location.reload(false);
    }

    //load an "Add/Remove a Movie" button if the user is the manager
    addMovieButton = () => {
        if (this.state.isManager)
            return (
                <Link to={{ pathname: ROUTES.ADD_MOVIE }} className="add-movie-style">Add/Remove a Movie</Link>
            );
    }

    //function to change cookie search order "show" to recent for the "See All Movies" button
    addCookieSearch = () => {
        const cookie = new Cookies();
        const options = {
            path: '/',
            maxAge: 120 * 60 * 1000,
            httponly: true,
            sameSite: true
        }
        const searchOrder = 'recent';
        cookie.set('show', searchOrder, options);

        //refresh the page if the button is clicked on All movies route
        const pageHref = window.location.href;
        const pageLocation = pageHref.substr(pageHref.indexOf('#') + 1);
        if (pageLocation === ROUTES.ALL_MOVIES)
            window.location.reload(false);
    }

    //load log buttons on the page
    loadLogButtons = () => {
        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');

        //if the user is logged in, change the NavBar button layout
        if (userIdCookie !== undefined) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">Welcome {this.state.loggedUserName}</a>
                        <ul className="dropdown-menu form-wrapper">
                            <li className="center-li">
                                <Link onClick={() => { this.addCookieSearch() }} to={{ pathname: ROUTES.ALL_MOVIES }} className="fav-style">See All Movies</Link>
                                {this.addMovieButton()}
                                <Link to={{ pathname: ROUTES.HOME }}>
                                    <button onClick={() => this.logOut()} className="logout-text">Log Out</button>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
        //else user is logged out
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
                        <a href="/#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">Sign Up</a>
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

    //refresh the current page if it is the home page
    refreshPage = () => {
        const pageHref = window.location.href;
        const pageLocation = pageHref.substr(pageHref.indexOf('#') + 1);
        if (pageLocation === ROUTES.HOME)
            window.location.reload(false);
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-default navbar-expand-lg navbar-light">
                <div className="navbar-header">
                    <Link to={{ pathname: ROUTES.HOME }}>
                        <p onClick={() => this.refreshPage()} className="navbar-brand pTagStyle">Movie<b>Mojo</b></p>
                    </Link>
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    {this.loadLogButtons()}
                </div>
            </nav>
        )
    }
}
