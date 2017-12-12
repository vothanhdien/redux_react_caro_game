/**
 * Created by vtdien on 12/12/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import History from './History'

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
        console.log(count);
        if(count >= 5)
            return true;

    }
    return false;
}

const HistoryList = ({ gameInfo, historyInfo, onJumpClick, onChangeOrderClick }) => {
    const width = gameInfo.boardSize;
    const current = gameInfo.history[gameInfo.stepNumber];

    let winner = calculateWinner(current,gameInfo.boardSize);
    let status;
    if(winner){
        status = "The winner is " + current.player;
    }else{
        status = 'Next player: ' + (gameInfo.xIsNext? "X" : "O");
    }
    let moves;
    if(historyInfo.isAscending){
        moves = gameInfo.history.map((step,move) => {
            let str = 'Go to game start';
            if (move)
                str = "Go to move #" + move + " " + step.player + "(" + parseInt(step.index / width, 0) + "," + step.index % width + ")";
            // if(move === gameInfo.stepNumber){
            return (
                <History key={move} onClick={() => onJumpClick(move)} text={str}/>
            )
            // } else{
            //     return(
            //         <History key={move} onClick={()=>onJumpClick(move)} text={str} isbold = {false}/>
            //     )
            // }
        });
    }else{
        const newHistory = [].concat(gameInfo.history)
            .reverse();
        const length = newHistory.length;
        moves = newHistory.map((step, move) => {
            const newMove =length - move - 1;
            const desc = newMove ?
                'Go to move #' + newMove +  " " + step.player + "(" + parseInt(step.index / width, 0) + "," + step.index % width + ")":
                'Go to game start';
            return (
                <History key={move} onClick={() => onJumpClick(newMove)} text={desc}/>
            );
        });
    }

    return(
        <div className="game-info">
            <h1><strong>{ status }</strong></h1>
            <button onClick={()=>onChangeOrderClick()}>Change order</button>
            <ul className="ul-none-disc">
                {moves}
            </ul>
        </div>
    )
};

HistoryList.propTypes = {
    gameInfo: PropTypes.shape({
        history: PropTypes.arrayOf(
            PropTypes.shape({
                squares: PropTypes.arrayOf(PropTypes.string.isRequired),
                index: PropTypes.number.isRequired,
                player: PropTypes.string.isRequired
            })
        ),
        boardSize: PropTypes.number.isRequired,
        stepNumber: PropTypes.number.isRequired,
        xIsNext: PropTypes.bool.isRequired,
        gameEnd: PropTypes.bool.isRequired
    }).isRequired,
    historyInfo: PropTypes.shape({
        isAscending: PropTypes.bool.isRequired,
    }).isRequired,
    onJumpClick: PropTypes.func.isRequired,
    onChangeOrderClick: PropTypes.func.isRequired
};

export default HistoryList