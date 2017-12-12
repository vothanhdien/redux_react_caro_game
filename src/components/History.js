/**
 * Created by vtdien on 12/12/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const History = ({ onClick,text}) =>{
    // if(isbold){
    //     return(
    //         <li>
    //             <button onClick={onClick} className="btn btn-primary" style={{fontWeight: 'bold'}}>
    //                 {text}
    //             </button>
    //         </li>
    //     )
    // }else{
        return(
            <li>
                <button onClick={onClick} className="btn btn-primary">
                    {text}
                </button>
            </li>
        )
    // }
};

History.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default History