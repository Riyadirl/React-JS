import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlice"; // You need to import the counterReducer

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});
