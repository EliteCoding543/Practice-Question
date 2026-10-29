import { createSlice } from '@reduxjs/toolkit'

export const tudoSlice = createSlice({
     name : "todos",
     initialState : {
        tudos : []
     },
     reducers : {
        addask : (state, action) => {
            state.tudos.push({ id : Date.now(), text : action.payload, complate : false })
        },

        removetask : (state, action) => {
            state.tudos = state.tudos.filter((item) => item.id !== action.payload) 
        },

        editTask : (state, action) => {
         const task = state.tudos.find((item) => item.id == action.payload.id)

         if(task){
            task.text = action.payload.text
         }
        }
     }
})

export const { addask, removetask, editTask } = tudoSlice.actions;
export default tudoSlice;