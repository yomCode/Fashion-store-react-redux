import { combineReducers } from "redux";
import { productRducer } from "./productReducer";



const reducers = combineReducers({
    allProducts: productRducer,
});