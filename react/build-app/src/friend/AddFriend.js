import React from 'react';

export class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: ''
        }
    }

    sendFriend() {
        this.props.addFriend(this.state.newFriend);

        this.setState({
            newFriend: ''
        });
    }

    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.newFriend}</div>
                <input type="text" onChange={(i) => this.updateNewFriend(i)} value={this.state.newFriend} />
                <button onClick={() => this.sendFriend()}>Add new</button>
            </div>
        );
    };
}