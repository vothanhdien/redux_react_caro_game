/**
 * Created by vtdien on 12/11/2017.
 */
import * as type from '../constrants/ActionTypes';
const initialState = {
    history :[{
        squares: new Array(25).fill(""),
        index: -1,
        player: "unknown",
    }],
    boardSize: 5,
    stepNumber: 0,
    xIsNext: true,
    gameEnd: false,
};

const gameInfo = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {
        case type.JUMP_TODO:

            return{
                ...state,
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0
            };
        case type.RESIZE_TODO:
            return{
                ...state,
                history: [{
                    squares: new Array(action.size * action.size).fill(null),
                    index: null,
                    player: "unknown",
                }],
                boardSize: action.size,
                stepNumber: 0,
                xIsNext: true,
                gameEnd: false,
            };

        case type.CLICK_SQUARE_TODO:
            const history = state.history.slice(0,state.stepNumber + 1);
            const current = history[state.stepNumber];
            const squares = current.squares.slice();
            squares[action.index] = state.xIsNext? "X" : "O";

            return{
                ...state,
                history: history.concat([{squares:squares,
                                            index: action.index,
                                            player: state.xIsNext? "X" : "O"}]),
                stepNumber: state.stepNumber + 1,
                xIsNext: !state.xIsNext,
            };
        default:
            return state;
    }
};

export default gameInfo
