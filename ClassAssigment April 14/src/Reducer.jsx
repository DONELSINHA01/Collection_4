
let initialData = {
    name:'Donel'
}


const basicReducer=(storedata= initialData,action)=>{
    if(action.type === 'name'){
        return{
            name:action.userName
        };
    }

    return storedata;
};

export default basicReducer;