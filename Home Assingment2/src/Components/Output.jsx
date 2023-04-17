import React from 'react';
import { useSelector } from 'react-redux';




function Output(props) {
    let data = useSelector((action)=>{return action;})
    return (
        <div>
            <h2>Count is {data.number}</h2>
        </div>
    );
}

export default Output;