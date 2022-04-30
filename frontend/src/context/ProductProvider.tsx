import axios from 'axios'
import { ReactNode, useState } from 'react'
import ProductContext from './ProductContext'

const ProductProvider = (props: { children: ReactNode }) => {
    const initial = [{
        id: '',
        title: '',
        price: 0,
        currency_id: '',
        available_quantity: 0,
        thumbnail: '',
        condition: ''
    }]
    const [allProducts, setAllProducts] = useState(initial)
    const [filteredProducts, setFilteredProducts] = useState(initial)
    const [loading, setLoading] = useState<boolean>(false)
    const [fetched, setFetched] = useState<boolean>(false)

    const getProducts = async (query: string) => {
        setLoading(true)
        setFetched(true)
        try {
            const response = await axios.get(`http://localhost:4000/api/search?query=${query}`)
            if (response.status === 200) {
                setAllProducts(response.data)
                setFilteredProducts(response.data)
            }
        } catch (error: unknown) {
            return error
        }
        setLoading(false)
    }

    const filterByCondition = (condition: string): void => {
        const productsToShow = allProducts.filter(product => product.condition.includes(condition))
        setFilteredProducts(productsToShow)
    }


    return (
        <ProductContext.Provider value={{
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts,
            getProducts,
            loading,
            fetched,
            filterByCondition
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider