// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import './index.css';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import todoApp from './reducers'
// import App from './components/App'
import Game from './components/Game'
import gameApp from './reducers/gameApp'
// import * as type from './constrants/ActionTypes'
// import {jumpTodo,resizeTodo,clickSquareTodo,changeOrder} from './actions'
let store = createStore(gameApp);

// console.log(store.getState());
// const unsubscribe = store.subscribe(()=> console.log(store.getState()))
//
// store.dispatch(clickSquareTodo(2))
// store.dispatch(clickSquareTodo(3))
// store.dispatch(clickSquareTodo(8))
// store.dispatch(clickSquareTodo(1))
// store.dispatch(clickSquareTodo(0))
// store.dispatch(clickSquareTodo(5))
// store.dispatch(jumpTodo(2));
// store.dispatch(changeOrder());
// store.dispatch(resizeTodo(8));


// Stop listening to state updates
// unsubscribe()


render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);