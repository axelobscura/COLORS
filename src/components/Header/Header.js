import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Flexbox element="header" flexDirection="row" height="60px">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/">Users</Link></li>
                </ul>
            </Flexbox>
        )
    }
}

export default Header;