import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                Footer
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/">Users</Link></li>
                </ul>
            </div>
        )
    }
}

export default Footer;