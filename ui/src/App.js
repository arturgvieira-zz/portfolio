import React, { Component } from 'react';
import './App.css';

import Toolbar from './toolbar/Toolbar.js';
import Menu from './menu/Menu.js';
import Dashboard from './menu/components/dashboard/Dashboard.js';
import Nav from './menu/components/nav/Nav.js';
import View from './view/View.js';

import 'es6-promise';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiet: false,
      hidden: true,
      endpoint: 'https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/',
      nav: null
    };
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
        this.setState({ nav: json });
      })
      .catch(error => {
        this.setState({ view: "Something went wrong. Please try again later." });
    });
  }
  
  nav = (obj) => {

    const anchor = {
      cursor: 'pointer',
      margin: '15px',
      padding: '5px 15px',
      textDecoration: "none"
    };
    
    if(obj){
      return obj.map( el => 
        (
          <a style={anchor} href={"#" + el}>
            <p key={el} aria-haspopup="true">
              {el}
            </p>
          </a>
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
          {this.nav(this.state.nav)}
        </section>
      </div>
    );
    
    return (
      <div className="App">
        {this.state.quiet ? snippet : header}
        {this.state.hidden ? null : drawer}
        <main className="main">
          <section className="panel card">
            <Menu>
              <div className="dashboard">
                <Dashboard handleClick={this.handleQuiet}/>
              </div>
              <div className="navigation"><Nav menu={this.nav(this.state.nav)} /></div>
            </Menu>
          </section>
          <section className="view card">
            <View/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
