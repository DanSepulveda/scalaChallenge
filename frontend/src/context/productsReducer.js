"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_PRODUCTS':
            return Object.assign(Object.assign({}, state), { allProducts: payload, filteredProducts: payload });
        case 'FILTER':
            return Object.assign(Object.assign({}, state), { filteredProducts: state.allProducts.filter(product => product.condition.includes(payload)) });
        case 'ORDER_PRODUCTS':
            return Object.assign(Object.assign({}, state), { filteredProducts: payload });
        case 'LOADING':
            return Object.assign(Object.assign({}, state), { loading: !state.loading });
        case 'SET_SEARCH':
            return Object.assign(Object.assign({}, state), { search: payload });
        case 'FETCHED':
            return Object.assign(Object.assign({}, state), { fetched: payload });
        default:
            return state;
    }
};
exports.default = productsReducer;
