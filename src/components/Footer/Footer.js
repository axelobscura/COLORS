import React, { Component } from 'react';
import './Footer.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';

class Footer extends Component {
    render() {
        return (
            <footer>
                {this.props.name} | {this.props.edad}
                <button className="btn" onClick={this.props.cambiarNombre}>CAMBIAR NOMBRE</button>
                <Flexbox element="footer" height="60px">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user/">Users</Link></li>
                    </ul>
                </Flexbox>
            </footer>
        )
    }
}

export default Footer;