import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer.js'

const CartContext = createContext();

const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem('cart');
    // if(localCartData === []){
    //     return [];
    // }else{
    //     return JSON.parse(localCartData);
    // }
    const parseData = JSON.parse(localCartData);
    if(!Array.isArray(parseData)) return [];
    return parseData;


}

const initialState  = {
    cart:getLocalCartData(),
    totalItem:"",
    totalPrice:"",
    shippingFee: 500,
}

const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const AddToCart = (id, amount, product) =>{
        console.log("add to cart clicked")
        dispatch({type:"ADD_TO_CART", payload: {id, amount, product} })
    }

    
    const removeItem = (id) =>{
        dispatch({type: "REMOVE_ITEM", payload:id});
    }

    const setDecrement = (id) => {
        dispatch({type:"SET_DECREMENT", payload: id})
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };
    
      const setIncrement = (id) => {
        dispatch({type:"SET_INCREMENT", payload: id})
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
      };

    useEffect(()=>{
        // dispatch({type:"TOTAL_ITEM"});
        // dispatch({type:"TOTAL_PRICE"});
        dispatch({type:"TOTAL_ITEM_TOTAL_PRICE"});
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },[state.cart])

return (<CartContext.Provider value={{...state, AddToCart, removeItem, setDecrement, setIncrement}}>{children}</CartContext.Provider>);
}


const useCartContext = () =>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext};