import React, { Component } from 'react';
import './View.css';

import 'es6-promise';
import fetch from 'isomorphic-fetch';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
    };
  }
  
  slider() {
    let array = []; 
    fetch("https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/resources/")
      .then(response => {
        return response.json();
      })
      .then(json => {
        Object.entries(json).forEach(([key, value]) => array.push(value));
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
    return (
        <div className="View">
          <div className="wrapper">
            <div><h1 className="title">{this.props.view && this.props.view.title ? this.props.view.title : "Portfolio"}</h1></div>
            <div><img className="slider" src={src} alt="Slider"/></div>
            <div><h3 className="welcome">{this.props.view && this.props.view.welcome ? this.props.view.welcome : "Welcome to my Portfolio"}</h3></div>
            <div><p className="description">{this.props.view && this.props.view.description ? this.props.view.description : "I made this, its all in one way, shape or form my creativity. Also those things which, I have been influenced by."}</p></div>
          </div>
          <div className="content">
          {this.props.view && this.props.view.data ? this.props.load(this.props.view) : null }
          </div>
        </div>
      );
  }
}

export default View;