/**
 * Created by FRAMGIA\bui.tuan.truong on 07/07/2017.
 */
import React from 'react';

export class EventHandle extends React.Component {
    constructor(props) {
        // In JavaScript classes, you need to explicitly call super(); when defining the constructor of a subclass.
        super(props);
        this.state = {mood: 'good'};
        // whenever you define an event handler that uses this,
        // you need to add this.methodName = this.methodName.bind(this) to your constructor function
        // we can use `this` in function toggleMood
        this.toggleMood = this.toggleMood.bind(this);
    }

    toggleMood() {
        console.log('123123');
        const newMood = this.state.mood === 'good' ? 'bad' : 'good';
        // Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.
        this.setState({mood: newMood});
    }

    render() {
        // you can't call this.setState() from inside of the render function!
        return (
            <div>
                <h1>I'm feeling {this.state.mood}!</h1>
                <button onClick={this.toggleMood}>
                    Click Me
                </button>
            </div>
        );
    }
}