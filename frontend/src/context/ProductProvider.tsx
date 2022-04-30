import axios from 'axios'
import { ReactNode, useReducer } from 'react'
import { ProductProps } from '../types'
import ProductContext from './ProductContext'
import productsReducer from './productsReducer'

const ProductProvider = (props: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        allProducts: [],
        filteredProducts: [],
        loading: false,
        fetched: false,
        search: null
    })

    const { allProducts, filteredProducts, loading, fetched, search } = state

    const getProducts = async (query: string) => {
        dispatch({ type: 'SET_SEARCH', payload: query[0].toUpperCase() + query.slice(1).toLowerCase() })
        dispatch({ type: 'LOADING', payload: null })
        dispatch({ type: 'FETCHED', payload: true })
        try {
            const response = await axios.get(`https://scala-dansep.herokuapp.com/api/search?query=${query}`)
            if (response.status === 200) {
                dispatch({ type: 'GET_PRODUCTS', payload: response.data })
            }
        } catch (error: unknown) {
            return error
        }
        dispatch({ type: 'LOADING', payload: null })
    }

    const orderByPrice = (order: string): void => {
        let orderedProducts = []
        if (order === 'low') {
            orderedProducts = filteredProducts.sort((a: ProductProps, b: ProductProps) => a.price - b.price)
        } else {
            orderedProducts = filteredProducts.sort((a: ProductProps, b: ProductProps) => b.price - a.price)
        }
        dispatch({ type: 'ORDER_PRODUCTS', payload: orderedProducts })
    }

    const filterByCondition = (condition: string): void => {
        dispatch({ type: 'FILTER', payload: condition })
    }


    return (
        <ProductContext.Provider value={{
            allProducts,
            filteredProducts,
            loading,
            fetched,
            search,
            getProducts,
            filterByCondition,
            orderByPrice
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider