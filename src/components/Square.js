/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Square = (props)=>{
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.text}
        </button>
    );
};
Square.propTypes={
    onSquareClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Square