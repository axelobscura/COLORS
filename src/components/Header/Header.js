import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                {this.props.name} | {this.props.edad}
                <button className="btn" onClick={this.props.cambiarNombre}>CAMBIAR NOMBRE</button>
                <Flexbox element="header" flexDirection="row" height="60px">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user/">Users</Link></li>
                    </ul>
                </Flexbox>
            </header>
        )
    }
}

export default Header;