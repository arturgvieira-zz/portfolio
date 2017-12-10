import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello from React UI</h1>
        </header>
        <p className="App-intro">
          <form method="get" action="https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/" ><button type="submit">Ping Server</button></form>
        </p>
      </div>
    );
  }
}

export default App;
