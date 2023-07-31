const FilterReducer = (state, action) =>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            };

        case "SET_GRID_VIEW":
        return {
            ...state,
            grid_view: true,
        };

        case "SET_LIST_VIEW":
        return {
            ...state,
            grid_view: false,
        };

        case "GET_SORT_VALUE":
            // let sortElement = document.getElementById('sort');
            // let sortValue = sortElement.options[sortElement.selectedIndex].value;
            // console.log('sortValue', sortValue)

            return {
                ...state,
                sorting_value: action.payload,
        };

        case "SORTING_PRODUCTS":
            let newSortData = [...action.payload];

            switch (state.sorting_value) {
              case 'az':
                newSortData.sort((a, b) => a.title.localeCompare(b.title));
                break;
              case 'za':
                newSortData.sort((a, b) => b.title.localeCompare(a.title));
                break;
              case 'lowest':
                newSortData.sort((a, b) => a.price - b.price);
                break;
              case 'highest':
                newSortData.sort((a, b) => b.price - a.price);
                break;
              default:
                // No sorting required for other cases
                break;
            }

        
            
            return {
              ...state,
              filter_products: newSortData,
            };

            case "UPDATE_FILTERS_VALUE":
                const {title, value} = action.payload;
                return {
                    ...state,
                    filters:{
                        ...state,
                         filters:{
                        [title]: value,
                         }
                    }
    
                }

            case "FILTER_PRODUCTS":
                let {all_products} = state;
                let tempFilterProducts = [...all_products];

                const {text} = state;
                if (text) {
                    tempFilterProducts = tempFilterProducts.filter((element)=>{
                        return element.title.toLowerCase().includes(text);
                    })
                }

                return {
                    ...state,
                    filter_products: tempFilterProducts,
                }
            


        
    
        default:
            return state;
    }
}

export default FilterReducer;