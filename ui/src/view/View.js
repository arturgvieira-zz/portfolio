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
  
  randomResource = () => {
    fetch("https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/document/data")
      .then(response => {
        return response.json();
      })
      .then(json => {
        const random = Math.floor((Math.random() * json.resources.length) + 1);
        this.setState({ src : json.resources[random - 1]});
      })
      .catch(error => {
        alert("Something went wrong. Please try again later.");
    });
  }
  
  componentDidMount() {
    this.randomResource();
  }
  
  render() {
    const {src} = this.state;
    return (
        <div className="View">
          <div className="wrapper">
            <div><h1 className="title">Portfolio</h1></div>
            <div><h3 className="welcome">Welcome to my Portfolio</h3></div>
            <div className="figure">
              <div className="hero" style={{ "backgroundImage": "url(" + src + ")"}}></div>
              <p>I made this, its all in one way, shape or form my creativity. Also those things which, I have been influenced by.</p>
            </div>
          </div>
          <div className="display">
            <div><h2 className="section">{this.props.view && this.props.view.info.title ? this.props.view.info.title : null}</h2></div>
            <div><h4 className="info">{this.props.view && this.props.view.info.subtitle ? this.props.view.info.subtitle : null}</h4></div>
            <div><p>{this.props.view && this.props.view.info.description ? this.props.view.info.description : null}</p></div>
            <div className="content">{this.props.view && this.props.view.data ? this.props.load(this.props.view.data) : null }</div>
          </div>
        </div>
      );
  }
}

export default View;