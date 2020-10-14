import { ADD_PRODUCT, CHANGE_AMOUNT_PRODUCT, DELETE_PRODUCT } from "./types";

const initialState = {
    cartProducts: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const isDuplicateProduct = state.cartProducts.some(product => product.name === action.payload.name);
            if (!isDuplicateProduct) {
                return {...state, cartProducts: state.cartProducts.concat(action.payload)};
            }
            return state;
        case DELETE_PRODUCT:
            return {...state, cartProducts: state.cartProducts.filter(product => product.name !== action.payload.name)};
        case CHANGE_AMOUNT_PRODUCT:
            return {...state, cartProducts: state.cartProducts.map(product => {
                    if (product.name === action.payload.name) {
                        product.amount = action.payload.amount;
                    }
                    return product;
                })
            };
        default: return state;
    }
}
