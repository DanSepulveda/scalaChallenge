import { Dispatch, SetStateAction } from 'react'

export type ProductProps = {
    id: string,
    title: string,
    price: number,
    currency_id: string,
    available_quantity: number,
    thumbnail: string,
    condition: string
}

export interface ContextProps {
    allProducts: ProductProps[] | [],
    setAllProducts: Dispatch<SetStateAction<ProductProps>> | Dispatch<SetStateAction<never[]>>,
    filteredProducts: ProductProps[] | [],
    setFilteredProducts: Dispatch<SetStateAction<ProductProps>> | Dispatch<SetStateAction<never[]>>
}
