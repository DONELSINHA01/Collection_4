import React from 'react';
import { useSelector } from 'react-redux';
function TextComp(props) {

   const data =  useSelector((myStore)=>{return myStore;})
    return (
        <div>
          <h2>Text Entered</h2>  
          <p>{data.name}</p>
        </div>
    );
}

export default TextComp;