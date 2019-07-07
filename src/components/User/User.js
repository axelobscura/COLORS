import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './User.css';

class User extends Component {
    render(props) {
        return (
            <Flexbox flexDirection="column" flexGrow="" className="Content" >
                <div className="User">
                    <h2>USUARIO {this.props.name}....</h2>
                </div>
            </Flexbox>
        )
    }
}

export default User;