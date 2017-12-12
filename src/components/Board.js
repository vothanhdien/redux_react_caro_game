/**
 * Created by vtdien on 12/12/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import BoardRow from './BoardRow'

const Board = ({ gameInfo, onSquareClick }) => {

    const current = gameInfo.history[gameInfo.stepNumber];
    const n = gameInfo.boardSize;
    let listRow = [];

    for(let i = 0; i < n;i++){
        let tmp = [];

        for(let j = 0; j < n ;j++){
            tmp.push(current.squares[i * n + j]);
        }
        listRow.push(tmp);
    }

    return(
        <div className="board-row">
            {
                listRow.map((row,move) => (
                    <BoardRow key={"board" + move} irow={move * n} squares={row} onSquareClick={(id)=> onSquareClick(id)}/>
                    )
                )
            }
        </div>
    )
};
Board.propTypes = {
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
    onSquareClick: PropTypes.func.isRequired
};
export default Board