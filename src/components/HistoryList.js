/**
 * Created by vtdien on 12/12/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import History from './History'

const HistoryList = ({ gameInfo, onJumpClick }) => {
    const width = gameInfo.boardSize;
    return(
        <ul>
            {gameInfo.history.map((step,move) => {
                let str = 'Go to game start';
                if(move)
                   str = "Go to move #" + move + " " + step.player + "(" + parseInt(step.index/width,0) + "," + step.index%width + ")";
                return(
                    <History key={move} onClick={()=>onJumpClick(move)} text={str}/>
                )
            })}
        </ul>
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
    onJumpClick: PropTypes.func.isRequired
};

export default HistoryList