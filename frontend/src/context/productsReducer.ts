import { ProductProps } from '../types'

interface ActionProps {
    type: 'SET_SEARCH' | 'LOADING' | 'FETCHED' | 'GET_PRODUCTS' | 'ORDER_PRODUCTS' | 'FILTER',
    payload?: any
}

interface StateProps {
    allProducts: ProductProps[] | [],
    filteredProducts: ProductProps[] | [],
    loading: boolean,
    fetched: boolean,
    search: string | null
}

const productsReducer = (state: StateProps, action: ActionProps) => {
    const { type, payload } = action
    switch (type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                allProducts: payload,
                filteredProducts: payload
            }
        case 'FILTER':
            return {
                ...state,
                filteredProducts: state.allProducts.filter(product => product.condition.includes(payload))
            }
        case 'ORDER_PRODUCTS':
            return {
                ...state,
                filteredProducts: payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: payload
            }
        case 'FETCHED':
            return {
                ...state,
                fetched: payload
            }
        default:
            return state
    }
}

export default productsReducer