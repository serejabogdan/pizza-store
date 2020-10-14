import { ADD_PRODUCT, DELETE_PRODUCT, CHANGE_AMOUNT_PRODUCT } from "./types";

export function addProduct(product) {
    product.amount = 1;
    return {
        type: ADD_PRODUCT,
        payload: product
    };
}

export function deleteProduct(product) {
    return {
        type: DELETE_PRODUCT,
        payload: product
    };
}

export function changleProductAmount(product) {
    return {
        type: CHANGE_AMOUNT_PRODUCT,
        payload: product
    };
}
