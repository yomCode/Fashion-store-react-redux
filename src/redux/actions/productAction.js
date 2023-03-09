import { type } from '@testing-library/user-event/dist/type';
import { ActionTypes } from '../types';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}


export const selectedProduct = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
    
}