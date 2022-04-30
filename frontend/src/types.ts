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
    filteredProducts: ProductProps[] | [],
    loading: boolean,
    fetched: boolean,
    search: string,
    getProducts: Function,
    filterByCondition: Function,
    orderByPrice: Function
}

export interface MessageProps {
    icon: string,
    message: string
}
