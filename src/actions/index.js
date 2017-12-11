/**
 * Created by vtdien on 12/10/2017.
 */
import * as type from '../constrants/ActionTypes'
let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: type.ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: type.SET_VISIBILITY_FILTER,
        filter
    }
};

export const toggleTodo = id => {
    return {
        type: type.TOGGLE_TODO,
        id
    }
};



//game
export const jumpTodo = step =>{
    return{
        type : type.JUMP_TODO,
        step
    }
};

export const clickSquareTodo = id =>{
    return{
        type: type.CLICK_SQUARE_TODO,
        index: id,
    }
};

export const resizeTodo = size =>{
    return{
        type: type.RESIZE_TODO,
        size
    }
};

export const changeOrder =()=>{
  return{
      type: type.CHANGE_ORDER
  }
};