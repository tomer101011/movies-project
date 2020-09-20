import React, { Component } from 'react'

import '../styles/navbar-style.css';

export default class NavBar extends Component {

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
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="/#">Login</a>
                            <ul className="dropdown-menu form-wrapper">
                                <li>
                                    <p className="hint-text">Sign in to your account</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block" value="Login" />
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
