import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import User from './components/User';
import Footer from './components/Footer';

class App extends Component {

  state = {
    counter: 0
  }

  counter = () => {
    console.log(this.state.counter++);
    this.setState({ counter: this.state.counter++ });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route
            path="/"
            exact
            render={(props) => <Content {...props} counter={this.counter} numero={this.state.counter} />}
          />
          <Route path="/user" component={User} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
