import React, { Component } from 'react';

class Content extends Component {
    render(props) {
        return (
            <div>
                <h1>{this.props.numero}</h1>
                <button onClick={this.props.counter}>Dale click</button>
            </div>
        )
    }
}

export default Content;