const ProductReducer = (state, action) =>{
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading:true
            }
        case "MY_PRODUCTS":
            const featureData = action.payload.filter((element)=>{
                    return element.id < 4;
            })
            // console.log('featureData', featureData)
            return {
                ...state,
                isLoading:false,
                products: action.payload,
                featureProducts: featureData
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading:true
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading:false,
                singleProduct: action.payload
            }
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading:false,
                isError:true
            }
        
        
        default:
            return state;
    }

}

export default ProductReducer;