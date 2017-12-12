/**
 * Created by vtdien on 12/11/2017.
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLICK_SQUARE_TODO = 'CLICK_SQUARE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const JUMP_TODO = 'JUMP_TODO';
export const RESIZE_TODO = 'RESIZE_TODO';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export var winner = "";


//----------------------------------------------------------
//rewrite
export function calculateWinner(squares, index) {
    const width = Math.sqrt(squares.length);
    const row = parseInt(index / width,0);
    const col = index % width;
    if(!squares[index])
        return null;
    let winner = null;

    // hang ngang
    let list = [];
    for(let i = row * width; i < row * width + width; i++) {
        list.push({
            id: "square" + i,
            value: squares[i],
        });
    }
    winner = containWin(list,squares[index]);

    if(winner){
        return winner;
    }

    //hang doc
    list=[];

    for(let i = col; i < width * width; i += width){
        list.push({
            id: "square" + i,
            value: squares[i],
        });
    }

    winner = containWin(list,squares[index]);
    if(winner)
        return winner;


    let min = col > row ? row: col;
    let max = col > row ? col: row;
    let d = width - max - 1;
    //cheo xuoi
    list =[];

    let minval = (row - min) * width + (col - min);

    let maxval = (row + d) * width + (col + d);

    for(let i = minval ; i <= maxval; i+= width + 1){
        list.push({
            id: "square" + i,
            value: squares[i],
        });
    }

    winner = containWin(list,squares[index]);
    if(winner)
        return winner;

    // cheo nguoc
    list = [];
    if(row + col < width){
        minval = col + row;
        maxval = (col + row) * width;
    }else{
        d = width - col - 1;
        let newrow = row - d;
        minval = newrow * width + width - 1;
        maxval = width * (width - 1) + newrow;
    }

    for(let i = minval ; i <= maxval; i += width - 1){
        list.push({
            id: "square" + i,
            value: squares[i],
        });
    }
    winner = containWin(list,squares[index]);
    if(winner)
        return winner;
    // khong thang
    return winner;
}
export function containWin(listArray, player) {
    if(listArray.length < 5)
        return null;
    let count = 0;
    for(let i  = 0; i < listArray.length;i++){
        if(listArray[i].value === player){
            if(count >= 4) {
                highLight(listArray,i);
                return player;
            }
            count += 1;
        }else{
            count = 0;
        }
    }
}
export function deHighLight() {
    while(document.getElementsByClassName('highlight').length > 0){
        document.getElementsByClassName('highlight')[0].classList.remove('highlight');
    }
}
export function highLight(listArray,i){

    for(let j = i; j >= i - 4 ; j--){
        document.getElementById(listArray[j].id).classList.add('highlight');
    }
}
//----------------------------------------------------------