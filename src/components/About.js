import React, { Component } from "react";
import Leaf from './Leaf'
import Navbar from './Navbar';
const logo = require('../assets/introImage.png');


class About extends Component {
    constructor(props) {
        super(props);
            this.state = {
            tagline: '',
            class: 'tagline-hidden'
        }
    }

    showtagline(){
        setTimeout(() => {
            this.setState({
                tagline: 'a software developer.',
                class: 'tagline-visible'
            })
              console.log('Our data is fetched');
            }, 2000)
    };

      componentDidMount() {
        this.showtagline();
    }


    render() {

        return (
          <div id="about">
            <div className="header-wrapper is-flex">
                <div className="title-div">
                    <h1 className="name title">I'm Sam</h1>
                </div>
                <div className="tagline-div">
                    <h1 id="tagline" className={this.state.class}>{this.state.tagline}</h1>
                </div>
            </div>
        </div>
        );
    }
}

export default About;