import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Content from './Content';
import User from './User';

class Contenidos extends Component {
    state = {
        counter: 0
    }

    counter = () => {
        console.log(this.state.counter++);
        this.setState({ counter: this.state.counter++ });
    }

    render(props) {
        return (
            <div>
                <Route
                    path="/"
                    exact
                    render={(props) => <Content {...props} counter={this.counter} numero={this.state.counter} />}
                />
                <Route path="/user" component={User} />
            </div>
        )
    }
}

export default Contenidos;