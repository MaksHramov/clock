import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
        addToCard(state, action){
            const existItem = state.find(item => item.id === action.payload.id)
            if(existItem){
                existItem.count++;
            }
            else{
                state.push({...action.payload, count: 1})
            }
        },
        deleteToCard(state, action){
            const existItem = state.find(item => item.id === action.payload.id)
            if(existItem.count > 1) {
                existItem.count--;
            }
            else{
                return state.filter(item => item.id !== action.payload.id)
            }
        }
    }
})

export const {addToCard, deleteToCard} = cardSlice.actions;
export default cardSlice.reducer;