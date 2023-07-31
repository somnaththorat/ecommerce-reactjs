
const CartReducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
        // console.log('state is ',state);
        // console.log('action.payload is ',action.payload);
        let existingProduct = state.cart.find((e)=> e.id === action.payload.id)
        if (existingProduct) {
            let updatedProduct = state.cart.map((e)=>{
                if (e.id === action.payload.id) {
                    let newAmount = e.amount + action.payload.amount;
                    if(newAmount > action.payload.stock){
                            newAmount = action.payload.stock;
                    }
                return {
                    ...e,
                    amount: newAmount,

                }

                }else{
                    return e;
                }
            })
            return {
                ...state,
                cart:updatedProduct
            }       
        }else{


        let cartProduct = {
            id:action.payload.id,
            title: action.payload.product.title,
            images:action.payload.product.images[0],
            price: action.payload.product.price,
            amount:action.payload.amount,
            stock:action.payload.product.stock,
        };
    

        return {
            ...state,
            cart:[...state.cart, cartProduct]
        }
        }
    case "REMOVE_ITEM":
        let updatedCart = state.cart.filter((e)=> e.id !== action.payload)
            return{
                ...state,
                cart : updatedCart,
            }

    case "SET_DECREMENT":
            let updatedProduct = state.cart.map((e)=>{
                if(e.id === action.payload){
                 let decrementAmount = e.amount - 1; 
                    if(decrementAmount < 1){
                        decrementAmount = 1
                    }
                 return {
                    ...e,
                    amount:decrementAmount,
                 }  
                }else{
                    return e;
                }

            })
            return {...state, cart: updatedProduct}
    
                
    case "SET_INCREMENT":
        let updatedProduct1 = state.cart.map((e)=>{
            if(e.id === action.payload){
             let incrementAmount = e.amount + 1; 
                if(incrementAmount > action.payload.stock){
                    incrementAmount = action.payload.stock;
                }
             return {
                ...e,
                amount:incrementAmount,
             }  
            }else{
                return e;
            }

        })
        return {...state, cart: updatedProduct1}
   
    case "TOTAL_ITEM":
        let count = state.cart.reduce((accum, curEl)=>{
            let {amount} = curEl;
            accum = accum + amount;
            return accum;
        }, 0);
        return {
            ...state,
            totalItem: count,
        }

    case "TOTAL_PRICE":
        let price = state.cart.reduce((accum, curEl)=>{
            let {price, amount} = curEl;
            accum = accum + price * amount ;
            return accum;
        },0)
        return {...state, totalPrice: price}
    
    
    case "TOTAL_ITEM_TOTAL_PRICE":
        let allVal = state.cart.reduce((accum, curEl)=>{
            // console.log('accum', accum)
            let {price, amount} = curEl;
            accum.totalItem += amount;
            accum.totalPrice += price * amount;

            return accum;

        },{totalItem: 0, totalPrice:0})
        return {
            ...state, 
            totalPrice: allVal.totalPrice, 
            totalItem: allVal.totalItem,
        }
    
    
    default:
       return state;
  }
}

export default CartReducer