import { combineReducers } from "@reduxjs/toolkit";
import MakeOrderReducer from "../Reducer/MakeOrderReducer";

const Transformer = combineReducers({
  MakeOrderReducer: MakeOrderReducer
});

export default Transformer

