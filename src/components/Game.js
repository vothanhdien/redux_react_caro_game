/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import Square from '../containers/Square'
let Game = ({ dispatch }) => {
    let input;

    return (
        <div>
            <div className="board-row">
                <Square value="0"/>
                <Square value="1"/>
                <Square value="2"/>
            </div>
            <div className="board-row">
                <Square value="3"/>
                <Square value="4"/>
                <Square value="5"/>
            </div>
            <div className="board-row">
                <Square value="6"/>
                <Square value="7"/>
                <Square value="8"/>
            </div>
        </div>
    )
};
Game = connect()(Game);

export default Game
