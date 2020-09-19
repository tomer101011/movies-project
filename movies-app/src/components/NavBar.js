import React, { Component } from 'react'

import '../styles/navbar-style.css';

export default class NavBar extends Component {

    // componentDidMount() {
    //     // Prevent dropdown menu from closing when click inside the form
    //     $(document).on("click", ".navbar-right .dropdown-menu", function (e) {
    //         e.stopPropagation();
    //     });
    // }

    render() {
        return (
            <nav className="navbar navbar-default navbar-expand-lg navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/#">Movie<b>Mojo</b></a>
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                {/* Collection of nav links, forms, and other content for toggling  */}
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <form className="navbar-form form-inline">
                        <div className="input-group search-box">
                            <input type="text" id="search" className="form-control" placeholder="Search here..." />
                            <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="/#">Login</a>
                            <ul className="dropdown-menu form-wrapper">
                                <li>
                                    <p class="hint-text">Sign in to your account</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block" value="Login" />
                                    <div className="form-footer">
                                        <a href="/#">Forgot Your password?</a>
                                    </div>
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
