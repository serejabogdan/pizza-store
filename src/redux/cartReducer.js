import { ADD_PRODUCT, DELETE_PRODUCT } from "./types";

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
        default: return state;
    }
}
