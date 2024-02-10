//making store in this file
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/todo'

//expoorting store
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});