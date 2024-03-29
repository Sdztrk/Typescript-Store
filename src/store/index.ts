// because this file is named index.ts, we can import it from the store folder without specifying the file name, just the folder name

import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './uiSlice'
import { productsReducer } from './ProductsSlice'

// export store, combine reducers/slices uiReducer and productsReducer
export const store = configureStore(
    {
        reducer: {
            ui: uiReducer,
            products: productsReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>