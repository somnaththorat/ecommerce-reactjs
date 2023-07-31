import { createContext , useContext, useEffect, useReducer} from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducer.js';   // imported filterReducer as reducer

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products : [],
    grid_view: true,
    sorting_value: 'lowest',
    filters: {
        text:"",
    },
}

export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    //set grid view
    const setGridView = () =>{
        console.log('grid view clicked')
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () =>{
        console.log('list view clicked')
        return dispatch({type:"SET_LIST_VIEW"})
    }

    const sorting = (event) =>{
        let sortValue = event.target.value;
        dispatch({type:"GET_SORT_VALUE", payload: sortValue})
    }

    const updateFilterValues = (event) =>{
        let title = event.target.title;
        let value = event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{title, value}})
    }

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS", payload:products})
        dispatch({type:"SORTING_PRODUCTS", payload:products})
    },[products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products});
    }, [products])
    
    return (
        <FilterContext.Provider value= {{...state, setGridView, setListView, sorting, updateFilterValues}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = ()=>{
    return useContext(FilterContext);
};