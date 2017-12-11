/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import { connect } from 'react-redux';
import {clickSquareTodo} from '../actions';

let Square = (props)=>{
    let value = "";
    //console.log(props);
    return (
        <button className="square" onClick={e => {
            e.preventDefault();
            if (value!=="") {
                return
            }
            props.dispatch(clickSquareTodo(props.value));}}>
            {value}
        </button>
    );
};
Square = connect()(Square);

export default Square