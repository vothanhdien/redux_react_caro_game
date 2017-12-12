/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import HistoryArea from '../containers/clickOnHistory'
import BoardArea from '../containers/clickOnBoard'
import ChangeSize from '../containers/ChangeSize'
import { Row, Grid, Col} from 'react-bootstrap'
const Game = () => (
    <Grid>
        <Row>
            <ChangeSize/>
        </Row>
        <Row>
            <Col sm={8} md={9}>
                <BoardArea />
            </Col>
            <Col sm={4} md={3}>
                <HistoryArea />
            </Col>
        </Row>
    </Grid>
);


export default Game
