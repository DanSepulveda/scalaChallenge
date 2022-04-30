import React from 'react'
import { ProductProps } from '../types'

const ProductCard = (props: { product: ProductProps }) => {
    const { thumbnail } = props.product
    return (
        <div>
            <img src={thumbnail} width={200} height={200} />
        </div>
    )
}

export default ProductCard