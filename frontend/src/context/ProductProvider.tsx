import { ReactNode, useState } from 'react'
import ProductContext from './ProductContext'

const ProductProvider = (props: { children: ReactNode }) => {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])



    return (
        <ProductContext.Provider value={{
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider