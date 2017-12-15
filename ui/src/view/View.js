import React, { Component } from 'react';
import './View.css';
import Content from './components/content/Content.js';

import 'es6-promise';
import fetch from 'isomorphic-fetch';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      content: null
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
            <div className="figure">
              <div className="hero" style={{ "backgroundImage": "url(" + src + ")"}}></div>
            </div>
          </div>
          <Content content={this.props.content}/>
        </div>
      );
  }
}

export default View;