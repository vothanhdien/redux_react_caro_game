/**
 * Created by vtdien on 12/11/2017.
 */
import React from 'react'

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square