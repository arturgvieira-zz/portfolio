import React, { Component } from 'react';
import './View.css';

import 'es6-promise';
import fetch from 'isomorphic-fetch';

import icon from './icon.svg';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
    };
  }
  
  slider() {
    let array = []; 
    fetch("https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/resources")
      .then(response => {
        return response.json();
      })
      .then(json => {
        Object.entries(json).forEach(([key, value]) => { array.push(value); });
        const random = Math.floor((Math.random() * array.length) + 1);
        this.setState({ src : array[random - 1]});
      })
      .catch(error => {
        console.log("Something went wrong. Please try again later.", error);
    });
  }
  
  componentDidMount() {
    this.slider();
  }
  
  
  render() {
    const {src} = this.state;
    return this.props.view ?  
      (
        <div className="View">
          <h1>{this.props.view.title ? this.props.view.title : null}</h1>
          <h3>{this.props.view.welcome ? this.props.view.welcome : null}</h3>
          <p>{this.props.view.description ? this.props.view.description : null}</p>
          {this.props.view.data !== 'null' ? this.props.load(this.props.view) : null}
        </div>
      )
    :
      (
        <div className="View">
          <div className="wrapper">
            <h1 className="title">Portfolio</h1>
            <h3 className="welcome">Welcome to my Portfolio!</h3>
            <p className="description">I made this, its all in one way, shape or form my creativity. Also those things which, I have been influenced by.</p>
            <div className="slider" style={{ background: "url(" + src + ") no-repeat center" }}></div>
          </div>
        </div>
      );
  }
}

export default View;