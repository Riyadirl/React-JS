import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlice"; // You need to import the counterReducer
import todoReducer from "../state/todo/todoSlice"; // You need to import the todoReducer


export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
});
