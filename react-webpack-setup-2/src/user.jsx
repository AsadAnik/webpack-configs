import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Users Class Component..</h2>
                <p>{this.props.username}</p>
                <h4>I am accually the Users stateful component of React</h4>
            </div>
        )
    }
}

export default User;