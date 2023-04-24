
let initialData={
    products:[],
    cartProducts:[],
    
}

const basicReducer=(storeData = initialData, action)=>{

    if(action.type==='allProducts'){
        return{
            ...storeData,
            products:action.payload
        }
    }
    else if(action.type==="allCartProducts"){
        return{
            ...storeData,
            cartProducts:[...storeData.cartProducts,action.cartItem]
        }
    }
    else if(action.type==='deleteItem'){
        return{
            ...storeData,
            cartProducts:[...storeData.cartProducts.filter((element)=>{
                return element.id!==action.itemId;
            })]
        }
    }

    return storeData;
}

export default basicReducer;











