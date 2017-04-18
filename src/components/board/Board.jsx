import React from 'react';
import Square from '../square/Square';
var BoardStore = require('../../stores/BoardStore');
var BoardActions = require('../../actions/BoardActions');
import './Board.css';

export default class Board extends React.Component {
    componentDidMount() {
        console.log("I mounted");
        BoardStore.listen(this.onChange);
    }

    componentWillUnmount() {
        BoardStore.unlisten(this.onChange);
    }

    onChange = (st) => {
        console.log(st);
        this.setState(st);
    };

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        //const status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
        return (
            <div className="board-container">
                <div className="board-status">{status}</div>
                <div className="board-grid">
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
            </div>
        );
    }


    handleClick(i) {
        if(!this.calculateWinner(this.state.squares)) {
            const squares = this.state.squares.slice();
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            BoardActions.updateSquares(squares);
        }
    }

    constructor() {
        super();
        //this.onChange = this.onChange.bind(this);
        this.state = BoardStore.getState();
        console.log(this.state);
    }


    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}
