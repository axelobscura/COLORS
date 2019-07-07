import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Flexbox element="header" flexDirection="row">
                    <ul flexDirection="row">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user/">Users</Link></li>
                        <li><a onClick={this.props.cambiarNombre}>CAMBIAR NOMBRE</a></li>
                    </ul>
                </Flexbox>
            </header>
        )
    }
}

export default Header;