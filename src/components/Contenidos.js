import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import MenuLateral from './MenuLateral/MenuLateral';
import Widgets from './Widgets/Widgets';
import Content from './Content/Content';
import User from './User/User';

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
            <Flexbox flexGrow={1} element="contenido">
                <MenuLateral />
                <Route
                    path="/"
                    exact
                    render={(props) => <Content {...props} counter={this.counter} numero={this.state.counter} />}
                />
                <Route
                    path="/user"
                    render={(props) => <User {...props} name={this.props.name} />}
                />
                <Widgets />
            </Flexbox>
        )
    }
}

export default Contenidos;