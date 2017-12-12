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

function calculateWinner(currentHistory, boardSize){
    const index = currentHistory.index;
    const square = currentHistory.squares;
    const player = currentHistory.player;
    const max = boardSize * boardSize;

    const distance  = [1,boardSize,boardSize+1,boardSize-1];

    for(let j = 0; j < 4; j++){
        let count = 1;
        let d = distance[j];
        for(let i = index + d; i < index + 5 * d; i += d){
            if(i >= max || square[i] !== player)
                break;
            count++;
        }
        for(let i = index - d; i > index - 5 * d; i-=d[j]){
            if(i < 0 || square[i] !== player)
                break;
            count++;
        }
        if(count >= 5)
            return true;
    }
}

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
                    squares: new Array(action.size * action.size).fill(""),
                    index: -1,
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

            let endgame = calculateWinner(squares,state.boardSize);
            return{
                ...state,
                history: history.concat([{squares:squares,
                    index: action.index,
                    player: state.xIsNext? "X" : "O"}]),
                stepNumber: state.stepNumber + 1,
                xIsNext: !state.xIsNext,
                gameEnd: endgame
            };
        default:
            return state;
    }
};

export default gameInfo
