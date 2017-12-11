/**
 * Created by vtdien on 12/10/2017.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    // console.log("filter");
    // console.log(action);
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter
