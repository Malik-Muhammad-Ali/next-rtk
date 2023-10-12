const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './slice.js';
import toDoReducer from './todoSlice.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
        todo: toDoReducer
    }
});