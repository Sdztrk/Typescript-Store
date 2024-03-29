import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/models";

interface ProductsState {
    loading: boolean;
    error:boolean;
    favorites: Product[],
    productsList: Product[]
}
// this productsState interface is used to define the type of the initial state

const initialState:ProductsState = {
loading:false,
error:false,
favorites:[],
productsList:[]
}
// here we define the initial state of the slice


// to imagine the shape of this object, look at the initial state, or the interface above
const productsSlice = createSlice({
    name:'product', 
    initialState: initialState,
    reducers:{
        fetchStart(state){
            state.loading = true;
            state.error = false;
        },

        fetchFail(state){
            state.loading= false;
            state.error = true;
        },
        getProducts(state, action: PayloadAction<Product[]>){
            state.loading = false;
            state.error = false;
            state.productsList = action.payload;
        }, 
        addFavorite(state, action:PayloadAction<Product>){
            state.favorites = [...state.favorites, action.payload]
        }, 
        removeFavorite(state, action: PayloadAction<Product[]>){
            state.favorites = action.payload
        }
    }
})

export const {addFavorite, fetchFail, fetchStart, getProducts, removeFavorite} = productsSlice.actions
export const productsReducer = productsSlice.reducer; 