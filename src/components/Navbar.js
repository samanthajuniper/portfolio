import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import pdf from '../assets/SamanthaMorganResume.pdf'


class Navbar extends Component {
    render() {
        return(
            <div id="navbar">
                <div className="link-container is-flex">
                    <NavLink to="/" className="is-size-5 has-text-weight-bold page-link ">About</NavLink>
                    <NavLink to="/projects" className="is-size-5 has-text-weight-bold page-link ">Projects</NavLink>
                    <NavLink to={pdf} target="_blank" className="is-size-5 has-text-weight-bold page-link ">Resume</NavLink>
                </div>
                <div className="icon-container is-flex">
                    <a href="https://github.com/samanthajuniper/" target="_blank" rel="noopener noreferrer" className="social-icon github">
                        <span className="icon is-large">
                            <i className="fab fa-github-square is-size-3"></i>
                        </span>
                    </a>
                    <a title="https://linkedin.com/in/samantha-morgan-a63306146" href="https://linkedin.com/in/samantha-morgan-a63306146" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <span className="icon is-large">
                            <i className="fab fa-linkedin is-size-3"></i>
                        </span>
                    </a>
                    <a href="mailto: samanthajmorgan36@gmail.com" target="_blank" rel="noopener noreferrer" title="email" className="social-icon mail">
                        <span className="icon is-large">
                            <i className="fas fa-paper-plane is-size-3"></i>
                        </span>
                    </a>
                </div>
            </div>

        )
    }
}

export default Navbar;



