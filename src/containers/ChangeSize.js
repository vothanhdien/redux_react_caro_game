/**
 * Created by vtdien on 12/12/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import {resizeTodo} from '../actions'

let ChangeSize=({dispatch})=>{
    let newSize;
    return(
        <div>
            <form
                onSubmit={e=>{
                    e.preventDefault();

                    let number = parseInt(newSize.value,0);
                    if(number && number > 5 && number < 25)
                        dispatch(resizeTodo(number));
                    else
                        alert("please input new value board size( 5<size<25)");
                    newSize.value = ''
                }}
            >
                <span>BoardSize: </span>
                <input type="number" ref={node =>{
                    newSize = node;
                }}/>
                <button type="submit">change</button>
            </form>
        </div>
    )
};

ChangeSize = connect()(ChangeSize);

export default ChangeSize