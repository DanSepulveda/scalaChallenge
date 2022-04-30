import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import ProductCard from './ProductCard'

const Catalogue = () => {
    const { filteredProducts } = useContext(ProductContext)
    return (
        <div>
            {filteredProducts.map(product => <ProductCard product={product} />)}
        </div>
    )
}

export default Catalogue