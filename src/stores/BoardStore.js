var alt = require('../../alt');
var BoardActions = require('../actions/BoardActions');

class BoardStore {
    constructor() {
        this.squares = Array(9).fill(null);
        this.xIsNext = true;

        this.bindListeners({
            handleUpdateSquares: BoardActions.UPDATE_SQUARES
        });
        console.log("I am created");
    }

    handleUpdateSquares(squares) {
        this.squares = squares;
        this.xIsNext = !this.xIsNext;
        console.log("I changed state");
    }

    GameOver() {

    }
}

module.exports = alt.createStore(BoardStore, 'BoardStore');