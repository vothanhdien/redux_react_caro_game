/**
 * Created by vtdien on 12/12/2017.
 */
import { connect } from 'react-redux'
import { jumpTodo,changeOrder } from '../actions'
import HistoryList from '../components/HistoryList'


const mapStateToProps = state => {
    return {
        gameInfo: state.gameInfo,
        historyInfo: state.historyInfo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onJumpClick: step => {
            dispatch(jumpTodo(step))
        },
        onChangeOrderClick: ()=>{
            dispatch(changeOrder())
        }
    }
};

const clickOnHistory = connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryList);

export default clickOnHistory