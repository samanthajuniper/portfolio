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
          <div>
            <div className="hero-grid">
                {/* <Leaf className={`leaf`} id={`leaf1`} />
                <Leaf className={`leaf`} id={`leaf2`} />
                <Leaf className={`leaf`} id={`leaf3`} /> */}
                    <div className="squareOne"></div>
                    <div className="squareTwo"></div>
                    <div className="squareThree" onMouseEnter={this.toggleClass} onMouseLeave={this.toggleClass}>
                        <p className="is-size-5">{this.state.text}</p>
                    </div>
            </div>
         </div>
        );
    }
}

export default About;