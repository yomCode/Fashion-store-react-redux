

const initialState = {
    products: [
        {
            id: 1,
            title: "Samsung Galaxy S21 Ultra 5G",
            category: "mobile",
        }
    ]
}

export const productRducer = (state, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }    
}