import React from 'react';

export class ListFriend extends React.Component {

    render() {
        let showFriend = this.props.friends.map(function(item, key) {
            return <li key={key}>{item}</li>;
        });

        return (
            <ul>{showFriend}</ul>
        )
    }
}