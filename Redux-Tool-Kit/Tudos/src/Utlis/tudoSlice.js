import { createSlice } from '@reduxjs/toolkit'

export const tudoSlice = createSlice({
     name : "tudo",
     initialState : {
        tudos : []
     },
     reducers : {
        addask : (state, action) => {
            state.tudos.push(action.payload)
        }
     }
})