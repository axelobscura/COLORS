import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuLateral.css';

class MenuLateral extends Component {
    render() {
        return (
            <div className="MenuLateral">
                <h1>Menu lateral</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/">Users</Link></li>
                </ul>
            </div>
        )
    }
}

export default MenuLateral;