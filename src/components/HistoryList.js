/**
 * Created by vtdien on 12/12/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import History from './History'

const HistoryList = ({ gameInfo, historyInfo, onJumpClick, onChangeOrderClick }) => {
    const width = gameInfo.boardSize;
    const current = gameInfo.history[gameInfo.stepNumber];
    console.log(gameInfo.stepNumber);
    let status;
    if(gameInfo.gameEnd){
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
            if(move === gameInfo.stepNumber){
                return (
                    <History key={move} onClick={() => onJumpClick(move)} text={str} isbold = {true}/>
                )
             } else{
                return(
                    <History key={move} onClick={()=>onJumpClick(move)} text={str} isbold = {false}/>
                )
            }
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
            // return (
            //     <History key={move} onClick={() => onJumpClick(newMove)} text={desc}/>
            // );
            if(move === 0){
                return (
                    <History key={move} onClick={() => onJumpClick(newMove)} text={desc} isbold = {true}/>
                )
            } else{
                return(
                    <History key={move} onClick={()=>onJumpClick(newMove)} text={desc} isbold = {false}/>
                )
            }
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