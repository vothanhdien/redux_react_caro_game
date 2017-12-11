/**
 * Created by vtdien on 12/12/2017.
 */
import * as type from '../constrants/ActionTypes';

const historyInfo = (state = {isAscending:true}, action) => {
    //console.log(state);
    switch (action.type) {
        case type.CHANGE_ORDER:
            return{
                isAscending: !state.isAscending,
            };
        default:
            return state;
    }
};

export default historyInfo