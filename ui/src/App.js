import React, { Component } from 'react';
import './App.css';

import Toolbar from './toolbar/Toolbar.js';
import View from './view/View.js';
import Dashboard from './dashboard/Dashboard.js';
import Nav from './nav/Nav.js';

import 'es6-promise';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiet: false,
      hidden: true,
      endpoint: 'https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/',
      url: '',
      view: null,
      nav: null
    };
  }
    
  handleRequest = (e) => {
    this.endpoint(this.state.endpoint + 'criteria/' + e);
  }

  handleQuiet = () => {
    this.setState({ quiet: !this.state.quiet });
  }

  handleClick = () => {
    this.setState({ hidden: false });
  }

  handleClickAway = () => {
    this.setState({ hidden: true });
  }

  endpoint = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        if(!this.state.nav){
          this.setState({ nav: json });
        }else {
          this.setState({ view: json });
        }
      })
      .catch(error => {
        this.setState({ view: "Something went wrong. Please try again later." });
    });
  }
  
  load = (obj) => {

    const div = {
      cursor: 'pointer',
      margin: '15px',
      padding: '5px 15px',
      color: '#2196f3',
    };
    
    if(obj){
      return obj.map( el => 
        (
          <div
          style={div}
          key={el}
          aria-haspopup="true"
          onClick={() => this.handleRequest(el)}>
            {el}
          </div>
        )
      );
    }else {
      return null;
    }
  }
  
  componentDidMount() {
    this.endpoint(this.state.endpoint);
  }

  render() {
    const header = (
      <header className="header">
        <Toolbar handleClick={this.handleClick}/>
      </header>
    );
    
    const snippet = (
      <div className="title embossed"><h4>Portfolio</h4></div>
    );
    
    const drawer = (
      <div className="drawer">
        <div className="panel" onClick={this.handleClickAway}></div>
        <section className="container">
          <span className="primary heading"><h3>Portfolio</h3></span>
          <a className="links" href="https://portfolio.arturgvieira.com">Home</a>
          <a className="links" href="https://arturgvieira.com">Website</a>
          <a className="links" href="https://arturgvieira.quip.com">Hire</a>
          <span className="heading"><h3>Dashboard</h3></span>
          {this.load(this.state.nav)}
        </section>
      </div>
    );
    
    return (
      <div className="App">
        {this.state.quiet ? snippet : header}
        {this.state.hidden ? null : drawer}
        <main className="main">
          <section className="panel card">
            <div className="dashboard">
              <Dashboard handleClick={this.handleQuiet}/>
            </div>
            <div className="navigation"><Nav menu={this.load(this.state.nav)} /></div>
          </section>
          <section className="view card">
            <View load={this.load} view={this.state.view} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
