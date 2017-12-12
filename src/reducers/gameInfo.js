/**
 * Created by vtdien on 12/11/2017.
 */
import * as type from '../constrants/ActionTypes';
import {calculateWinner}from '../constrants/ActionTypes'
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
            let winner  = calculateWinner(squares,current.index);
            if(winner)
                return {
                    ...state
                };

            squares[action.index] = state.xIsNext? "X" : "O";


            //console.log(winner);
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

// function calculateWinner(squares, index, boardSize) {
//     const width = boardSize;
//     const row = parseInt(index/boardSize,0);
//     const col = index%boardSize;
//     if(!squares[index])
//         return null;
//     let winner = null;
//
//     // hang ngang
//     let list = [];
//     for(let i = row * width; i < row * width + width; i++) {
//         list.push({
//             id: "square" + i,
//             value: squares[i],
//         });
//     }
//     winner = containWin(list,squares[index]);
//
//     if(winner){
//         return winner;
//     }
//
//     //hang doc
//     list=[];
//
//     for(let i = col; i < width * width; i += width){
//         list.push({
//             id: "square" + i,
//             value: squares[i],
//         });
//     }
//
//     winner = containWin(list,squares[index]);
//     if(winner)
//         return winner;
//
//
//     let min = col > row ? row: col;
//     let max = col > row ? col: row;
//     let d = width - max - 1;
//     //cheo xuoi
//     list =[];
//
//     let minval = (row - min) * width + (col - min);
//
//     let maxval = (row + d) * width + (col + d);
//
//     for(let i = minval ; i <= maxval; i+= width + 1){
//         list.push({
//             id: "square" + i,
//             value: squares[i],
//         });
//     }
//
//     winner = containWin(list,squares[index]);
//     if(winner)
//         return winner;
//
//     // cheo nguoc
//     list = [];
//     if(row + col < width){
//         minval = col + row;
//         maxval = (col + row) * width;
//     }else{
//         d = width - col - 1;
//         let newrow = row - d;
//         minval = newrow * width + width - 1;
//         maxval = width * (width - 1) + newrow;
//     }
//
//     for(let i = minval ; i <= maxval; i += width - 1){
//         list.push({
//             id: "square" + i,
//             value: squares[i],
//         });
//     }
//     winner = containWin(list,squares[index]);
//     if(winner)
//         return winner;
//     // khong thang
//     return winner;
// }
// function containWin(listArray, player) {
//     if(listArray.length < 5)
//         return null;
//     let count = 0;
//     for(let i  = 0; i < listArray.length;i++){
//         if(listArray[i].value === player){
//             if(count >= 4) {
//                 return player;
//             }
//             count += 1;
//         }else{
//             count = 0;
//         }
//     }
// }

export default gameInfo
