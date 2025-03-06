import { combineReducers } from "@reduxjs/toolkit";
import exampleSlice from "../features/example/exampleSlice";

const rootReducer = combineReducers({
    example: exampleSlice.reducer,
});

export default rootReducer;