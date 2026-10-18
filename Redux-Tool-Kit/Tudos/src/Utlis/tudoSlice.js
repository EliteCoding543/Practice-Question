import { createSlice } from '@reduxjs/toolkit'

export const tudoSlice = createSlice({
     name : "todos",
     initialState : {
        tudos : []
     },
     reducers : {
        addask : (state, action) => {
            state.tudos.push({
               id : Date.now(),
               text : action.payload,
               complate : false
            })
        }
     }
})

export const { addask } = tudoSlice.actions;
export default tudoSlice;