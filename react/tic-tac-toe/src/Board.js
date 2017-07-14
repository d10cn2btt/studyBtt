import React from 'react';
import {Square} from './Square';

export class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            demoState: true
        }
    }

    /**
     when use onClick={this.abc} => `this` in function abc will be null => CAN NOT access the state
     => FIX: bind `this` in constructor like : this.abc = this.abc.bind(this);
     when use onClick={() => this.abc()} => `this` in function abc will be the class Board => CAN access the state
     **/
    abc() {
        console.log(this.state.demoState ? 'X' : 'O');
        // console.log(this.getNextPlayer());
        // console.log(this.state.square);
    }

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            clickItem={() => this.props.onClick(i)}
        />;
    }

    render() {
        return (
            <div>
                <div className="status" onClick={() => this.abc()}>Click me</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}