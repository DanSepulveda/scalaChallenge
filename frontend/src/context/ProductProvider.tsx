import axios from 'axios'
import { ReactNode, useState } from 'react'
import ProductContext from './ProductContext'

const ProductProvider = (props: { children: ReactNode }) => {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const getProducts = async (query: string) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/search?query=${query}`)
            console.log(response.data)
            if (response.status === 200) {
                setAllProducts(response.data)
                setFilteredProducts(response.data)
            }
        } catch (error: unknown) {
            return error
        }
    }


    return (
        <ProductContext.Provider value={{
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts,
            getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider