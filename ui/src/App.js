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
      content: null
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

  endpoint = () => {
    fetch("https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/")
      .then(response => {
        return response.json();
      })
      .then(json => {
        json.sort((x, y) => 
          x.tags.level < y.tags.level ? -1 :
            x.tags.level > y.tags.level ? 1 : 
              x.tags.heading === true ? -1 : 
                y.tags.heading === true ? 1 : 0
        );
        this.setState({ content : json });
      })
      .catch(error => {
        alert("Something went wrong. Please try again later.");
    });
  }
  
  menu = {
    drawer: (obj) => {
      const anchor = {
        cursor: 'pointer',
        margin: '5px',
        padding: '5px 25px',
        textDecoration: "none"
      };
      
      if(obj){
        return obj.filter(x => x.tags.heading === true).map( y =>
          (
            <a style={anchor} href={"#" + y.title} aria-haspopup="true">
              <h3 key={y.title}>
                {y.title}
              </h3>
            </a>
          )
        )
      }else {
        return null;
      }
    },
    nav: (obj) => {
      const anchor = {
        cursor: 'pointer',
        textDecoration: "none"
      };
      
      if(obj){
        return obj.map( b => 
          (
              <div>
                <a style={anchor} href={"#" + b.title} aria-haspopup="true">
                  <h3 key={b.title}>
                    {b.title}
                  </h3>
                </a>
              </div>
          )
        )
      }else {
        return null;
      }
    }
  }
  
  componentDidMount() {
    this.endpoint();
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
          {this.menu.drawer(this.state.content)}
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
              <div className="navigation"><Nav menu={this.menu.nav(this.state.content)} /></div>
            </Menu>
          </section>
          <section className="view card">
            <View content={this.state.content}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
