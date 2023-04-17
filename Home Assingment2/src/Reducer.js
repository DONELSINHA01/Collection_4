
let initial={
    number:0,
}

const basicReducer=(storeData=initial,action)=>{

    if(action.type==='inc'){
       return { number:storeData.number+1}
    }
    else if(action.type==='dec'){
        return{ number:storeData.number-1}
    }

    else if(action.type==='reset'){
        return { number:0}
    }

    return storeData;
}   

export default basicReducer;