import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import avatar from '../assets/me.JPG';

class Navbar extends Component {

    //   $('#header .navbar-burger').on('click', function() {
    //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //     $('#header .navbar-burger').toggleClass('is-active');
    //     $('#header .navbar-menu').toggleClass('is-active');
    // });

    render() {
        return(
            <header id="navbar">
                <div className="link-container is-flex">
                    <NavLink to="/" className="is-size-6 has-text-weight-semibold  page-link ">About</NavLink>
                    <NavLink to="/projects" className="is-size-6 has-text-weight-semibold  page-link ">Projects</NavLink>
                    <NavLink to="/contact" className="is-size-6 has-text-weight-semibold page-link ">Resume</NavLink>
                </div>
                <div className="icon-container is-flex">
                    <a href=""  class="social-icon">
                        <span className="icon is-large">
                            <i className="fab fa-github-square has-text-primary is-size-4"></i>
                        </span>
                    </a>
                    <a href="" target="_blank" class="social-icon">
                        <span className="icon is-large">
                            <i className="fab fa-linkedin has-text-primary is-size-4"></i>
                        </span>
                    </a>
                    <a href="" target="_blank" class="social-icon">
                        <span className="icon is-large">
                            <i className="fas fa-envelope has-text-primary is-size-4"></i>
                        </span>
                    </a>
                </div>
            </header>

        )
    }
}

export default Navbar;



