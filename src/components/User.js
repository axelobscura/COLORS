import React, { Component } from 'react';

class User extends Component {
    render(props) {
        return (
            <div>
                <h2>USUARIO {this.props.name}....</h2>
            </div>
        )
    }
}

export default User;