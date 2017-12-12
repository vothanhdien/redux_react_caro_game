/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'



const BoardRow = ({irow, squares ,onSquareClick})=>{
    // console.log(irow);
    // console.log(squares);
    return(
        <div className="board-row" >
            {
                squares.map((square,move) =>(
                        <Square key={move + irow} index={move + irow} text={square} onSquareClick={()=>{if(squares[move]==="")onSquareClick(move + irow)}}/>
                    )
                )
            }
        </div>
    )
};

BoardRow.propTypes = {
    irow: PropTypes.number.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onSquareClick: PropTypes.func.isRequired
};

export default BoardRow;