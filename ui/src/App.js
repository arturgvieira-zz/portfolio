import React, { Component } from 'react';
import './App.css';
import Breadcrumbs from './breadcrumbs/Breadcrumbs.js';
import Toolbar from './toolbar/Toolbar.js';
import View from './view/View.js';
import Dashboard from './dashboard/Dashboard.js';
import Nav from './nav/Nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiet: false,
      hidden: true,
    };
  }
  
  handleChange = () => {
    this.setState({ quiet: !this.state.quiet });
  }

  handleClick = () => {
    this.setState({ hidden: false });
  }

  handleClickAway = () => {
    this.setState({ hidden: true });
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
          <h3 className="heading">Portfolio</h3>
          <a className="links" href="https://portfolio.arturgvieira.com">Home</a>
          <a className="links" href="https://arturgvieira.com">Website</a>
          <a className="links" href="https://arturgvieira.quip.com">Hire</a>
          <h3 className="heading">Menu</h3>
          <a className="links" href="#projects">Projects</a>
          <a className="links" href="#frameworks">Frameworks</a>
          <a className="links" href="#languages">Languages</a>
        </section>
      </div>
    );
    
    return (
      <div className="App">
        {this.state.quiet ? snippet : header}
        {this.state.hidden ? null : drawer}
        <main className="wrapper">
          <section className="panel">
            <aside className="dashboard">
              <Dashboard handleClick={this.handleChange}/>
            </aside>
            <div className="navigation"><Nav /></div>
          </section>
          <section className="view"><View /></section>
        </main>
      </div>
    );
  }
}

export default App;
