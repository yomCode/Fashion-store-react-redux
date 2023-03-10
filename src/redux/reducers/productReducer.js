import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
}

export const productRducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }    
}