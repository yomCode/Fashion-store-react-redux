import { combineReducers } from "redux";
import { selectedProduct } from "../actions/productAction";
import { productRducer, selectedProductReducer } from "./productReducer";



const reducers = combineReducers({
    allProducts: productRducer,
    product: selectedProductReducer,
});


export default reducers;