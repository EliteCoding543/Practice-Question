import { configureStore } from '@reduxjs/toolkit'
import tudoSlice from './tudoSlice'

export const Store = configureStore({
    reducer : {
        tudo : tudoSlice.reducer
    }
})