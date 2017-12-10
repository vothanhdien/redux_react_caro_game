/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

let Game = ({ dispatch }) => {
    let input;

    return (
        <div>
            <div className="board-row">
                <Square id="0"/>
                <Square id="1"/>
                <Square id="2"/>
            </div>
            <div className="board-row">
                <Square id="3"/>
                <Square id="4"/>
                <Square id="5"/>
            </div>
            <div className="board-row">
                <Square id="6"/>
                <Square id="7"/>
                <Square id="8"/>
            </div>
        </div>
    )
};
Game = connect()(Game);

export default Game
