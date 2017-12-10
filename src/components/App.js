/**
 * Created by vtdien on 12/10/2017.
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div className = "container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App
