import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contenidos from './components/Contenidos';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Contenidos />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
