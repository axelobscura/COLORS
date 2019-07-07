import React, { Component } from 'react';
import './Content.css';
import Flexbox from 'flexbox-react';

class Content extends Component {
    render(props) {
        return (
            <Flexbox flexDirection="column" flexGrow="" className="Content" >
                <h1>{this.props.numero}</h1>
                <button onClick={this.props.counter}>Dale click</button>
            </Flexbox>
        )
    }
}

export default Content;