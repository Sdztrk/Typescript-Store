import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui', 
    initialState:{darkMode: true},
    reducers:{
        toggleDisplayMode(state){
            state.darkMode = !state.darkMode;
        }
    }
})


export const uiReducer = uiSlice.reducer;
export const {toggleDisplayMode} = uiSlice.actions;