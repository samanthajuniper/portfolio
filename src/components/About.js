import React, { Component } from "react";
import Leaf from './Leaf'
import Navbar from './Navbar';

class About extends Component {
    constructor() {
        super()
        this.state= {
            isTagLineVisible: false,
            text: "I am Sam",
            // changeSquareThreeClass: "squareThree"
        };
    }

    toggleClass = () => {
        this.setState(prevState => ({ isTagLineVisible: !prevState.isTagLineVisible }));
        if(this.state.isTagLineVisible === true) {
            this.setState({
                text: "I'm Sam",
                // changeSquareThreeClass: "squareThree"
            })
        } else {
            this.setState({
                text: "a software developer",
                // changeSquareThreeClass: "squareThreeActive"
            })
        }
    };

    render() {

        return (
          <div id="about">


           <div className="hero-grid">
                 {/* <Leaf className={`leaf`} id={`leaf1`} />
                <Leaf className={`leaf`} id={`leaf2`} />
                <Leaf className={`leaf`} id={`leaf3`} /> */}

                    <h1 class="about-title">I'm Sam</h1>
                    <h2 class="about-subtitle">a software developer</h2>

                </div>
         </div>
        );
    }
}

export default About;