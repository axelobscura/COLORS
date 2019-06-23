import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import './App.css';
import Header from './components/Header/Header';
import Contenidos from './components/Contenidos';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Router>
          <Header />
          <Contenidos />
          <Footer />
        </Router>
      </Flexbox>
    );
  }
}

export default App;
