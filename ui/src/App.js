import React, { Component } from 'react';
import './App.css';
import Breadcrumbs from './breadcrumbs/Breadcrumbs.js';
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
      default: 'https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/',
      url: '',
      view: null,
      nav: null
    };
  }
    
  handleRequest = (e) => {
    this.endpoint(this.state.default + e);
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
          this.setState({ view: json, nav: json });
        }else {
          this.setState({ view: json });
        }
      })
      .catch(error => {
        this.setState({ view: "Something went wrong. Please try again later." });
    });
  }
  
  componentDidMount() {
    this.endpoint(this.state.default);
  }

  render() {
    const header = (
      <header className="header">
        <Toolbar handleClick={this.handleClick}/>
        <div className="breadcrumbs"><Breadcrumbs /></div>
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
          <span className="heading">Dashboard</span>
          <span className="links" onClick={() => this.handleRequest('projects')}>Projects</span>
          <span className="links" onClick={() => this.handleRequest('frameworks')}>Frameworks</span>
          <span className="links" onClick={() => this.handleRequest('languages')}>Languages</span>
        </section>
      </div>
    );
    
    return (
      <div className="App">
        {this.state.quiet ? snippet : header}
        {this.state.hidden ? null : drawer}
        <main className="content">
          <section className="panel card">
            <div className="dashboard">
              <Dashboard handleClick={this.handleQuiet}/>
            </div>
            <div className="navigation"><Nav view={this.state.nav} handleRequest={this.handleRequest} /></div>
          </section>
          <section className="view card">
            <View view={this.state.view} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
