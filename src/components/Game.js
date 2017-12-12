/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import HistoryArea from '../containers/clickOnHistory'
import BoardArea from '../containers/clickOnBoard'
import ChangeSize from '../containers/ChangeSize'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Game = () => (
    <div className="container">
        <div className="row">
            <ChangeSize/>
        </div>
        <br/>
        <div className="row">
            <div className="col-md-9">
                <BoardArea />
            </div>
            <div className="col-md-3">
                <HistoryArea />
            </div>
        </div>
    </div>
);


export default Game
