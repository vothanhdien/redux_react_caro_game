/**
 * Created by vtdien on 12/12/2017.
 */
import { connect } from 'react-redux'
import { clickSquareTodo } from '../actions'
import Board from '../components/Board'
const mapStateToProps = state => {
    return {
        gameInfo: state.gameInfo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSquareClick: id => {
            dispatch(clickSquareTodo(id))
        }
    }
};

const clickOnBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default clickOnBoard