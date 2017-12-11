/**
 * Created by vtdien on 12/12/2017.
 */
import { connect } from 'react-redux'
import { jumpTodo } from '../actions'
import HistoryList from '../components/HistoryList'


const mapStateToProps = state => {
    return {
        gameInfo: state.gameInfo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onJumpClick: step => {
            dispatch(jumpTodo(step))
        }
    }
};

const clickOnHistory = connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryList);

export default clickOnHistory