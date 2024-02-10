//creating todo slice // we can call api by using asyncThunk method from RTK.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fetch Todo action
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
})



//creating slice
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => { // we are taking extrareducers instead of reducer and here we have builer  
        builder.addCase(fetchTodos.fulfilled, (state, action) => { //adding to state if our api call is fullfilled then loading is equal to false and data is set to action.payload
            state.isLoading = false;
            state.data = action.payload;
        });
        //is api call is pending then this will work
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        })
        //if api call is rejected or have error in it
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isError = true;
            console.log('Error occured', action.payload);
        })
    }
});

export default todoSlice.reducer