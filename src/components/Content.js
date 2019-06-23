import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class Content extends Component {
    render(props) {
        return (
            <Flexbox flexDirection="column">
                <h1>{this.props.numero}</h1>
                <button onClick={this.props.counter}>Dale click</button>
            </Flexbox>
        )
    }
}

export default Content;