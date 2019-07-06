import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import './App.css';
import Header from './components/Header/Header';
import Contenidos from './components/Contenidos';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Juan',
      edad: 36
    }
  }

  cambiarNombre = () => {
    console.log("ahue....");
    let nombres = this.state.name === 'Luis' ? 'Axel' : 'Luis';
    this.setState({ name: nombres });
  }

  render() {
    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Router>
          <Header cambiarNombre={this.cambiarNombre} />
          <Contenidos name={this.state.name} edad={this.state.edad} />
          <Footer cambiarNombre={this.cambiarNombre} name={this.state.name} edad={this.state.edad} />
        </Router>
      </Flexbox>
    );
  }
}

export default App;
