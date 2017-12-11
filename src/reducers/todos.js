/**
 * Created by vtdien on 12/10/2017.
 */
import * as type from '../constrants/ActionTypes';

const todos = (state = [], action) => {
    //console.log(state);
    //console.log(1);
    switch (action.type) {

        case type.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case type.CLICK_SQUARE_TODO:
            return [
                ...state,
                {
                    id: action.id
                }
            ];
        case type.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export default todos
