import React, { Component } from 'react'

import '../styles/navbar-style.css';

export default class NavBar extends Component {

    componentDidMount = () => {

        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            //to show navbar on mobile on top
            if (currentScrollPos === 0)
                document.getElementById("navbar").style.top = "0"

            else if (prevScrollpos > currentScrollPos)
                document.getElementById("navbar").style.top = "0";

            else
                document.getElementById("navbar").style.top = "-800px";

            prevScrollpos = currentScrollPos;
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
