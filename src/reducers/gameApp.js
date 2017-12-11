/**
 * Created by vtdien on 12/12/2017.
 */
import { combineReducers } from 'redux'
import gameInfo from './gameInfo'
import historyInfo from './historyInfo'

const gameApp = combineReducers({
    gameInfo,
    historyInfo
});

export default gameApp