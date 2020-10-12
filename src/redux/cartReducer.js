import { ADD_PRODUCT } from "./types";

const initialState = {
    cartProducts: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, cartProducts: state.cartProducts.concat(action.payload)};
        default: return state;
    }
}