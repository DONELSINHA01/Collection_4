import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './shop.css';
const Api = 'https://fakestoreapi.com/products';

function Shop(props) {
    const {products,cartProducts}=useSelector((storeData)=>{
        return storeData;
    })
    const dispatch = useDispatch(); 
     

    useEffect(()=>{
        if(products.length<1){
            fetch(Api)
        .then(res=>res.json())
        .then(data=>{
            
            dispatch({
                type:"allProducts",
                payload:data
            });
            
        })
        }
    },[])
    
    const cartFunction=(object)=>{
        console.log(object);
        const cartObj={
            id:object.id,
            image:object.image,
            title:object.title,
            price:object.price
        }
        cartProducts.push(cartObj);
        dispatch({
            type:"allCartProducts",
            cartItem: cartProducts
        })              
    }  
   
    return (
        <div className='shop'>
            <header>
                <h2>All Products</h2>
            </header>
            <center style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                {
                    products.map((item)=>{

                        const obj = {
                            id:item.id,
                            title:item.title,
                            image:item.image,
                            price:item.price
                        }

                        return (
                            <div className="card">
                                <img src={obj.image} width={'100px'} height={'100px'}/>
                                <p><b>{obj.title}</b></p>
                                <small style={{color:'orange'}}><b>{obj.price}</b></small><br />
                                <button onClick={()=>{cartFunction(obj)}}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </center>
        </div>
    );
}

export default Shop;
