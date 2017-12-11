/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import HistoryArea from '../containers/clickOnHistory'
import BoardArea from '../containers/clickOnBoard'
import * as R from 'react-bootstrap'
const Game = () => (
    <R.Grid>
        <R.Row>
            <R.Col sm={8} md={9}>
                <BoardArea />
            </R.Col>
            <R.Col sm={4} md={3}>
                <HistoryArea />
            </R.Col>
        </R.Row>
    </R.Grid>
);


export default Game
