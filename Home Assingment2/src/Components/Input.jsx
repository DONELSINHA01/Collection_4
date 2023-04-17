import React from 'react';
import myStore from '../Store';
function Input(props) {
    const dispatch1=()=>{
        myStore.dispatch({
            type:'inc',
             
        })
    }
    const dispatch2=()=>{
        myStore.dispatch({
            type:'dec',
            
        })
    }
    const dispatch3=()=>{
        myStore.dispatch({
            type:'reset',
            
        })
    }

    return (
        <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
            <button onClick={dispatch1}>Increace</button>
            <button onClick={dispatch2}>Decrease</button>
            <button onClick={dispatch3}>Reset</button>
        </div>
    );
}

export default Input;