import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../Reducer/ProductReducer.js'

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products:[],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct:{}
}
 

const AppProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const API = 'https://dummyjson.com/products';
    const getProducts = async(API) =>{
        dispatch({type: "LOADING"})
        try {
            const res = await axios.get(API);
            const products = res.data.products
            // console.log(products); 
             dispatch({type: "MY_PRODUCTS", payload: products})
        } catch (error) {
            dispatch({type: "API_ERROR"})
        }
    }


    // single product details api
    const getSingleProduct = async (API)=>{
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(API);
            const singleProduct = res.data
            // console.log('singleProduct', singleProduct);
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
        } catch (error) {
        dispatch({type: "SET_SINGLE_ERROR"})
            
        }
    }
    useEffect(()=>{
        getProducts(API);
    },[])

    return (
    <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
    )
};

//custom hook
const useProductContext = () =>{
    return useContext(AppContext);
}
export {AppProvider, AppContext, useProductContext};