import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


function Cart(props) {
    const dispatch = useDispatch();
    const { cartProducts } = useSelector((storeData) => {
        return storeData;
    })
    console.log(cartProducts);
    return (
        <div className='myCart'>
            {
                cartProducts.map((element,i) => {
                    return (
                        <div className="cartItem" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <img src={element.image} width={"30px"} height={'30px'} />
                            <p>{element.title}</p>
                            <p><b>{element.price}</b></p>
                            <button onClick={() => {dispatch({
                                    type:'deleteItem',
                                    itemId:element.id
                                });
                            }
                            }>remove</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cart;