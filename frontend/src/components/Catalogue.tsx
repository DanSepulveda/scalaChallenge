import { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import Filter from './Filter'
import Message from './Message'
import Order from './Order'
import Pagination from './Pagination'
import ProductCard from './ProductCard'

const Catalogue = (): JSX.Element => {
    const { allProducts, filteredProducts, fetched } = useContext(ProductContext)
    const [page, setPage] = useState(1)
    const pageQty = Math.ceil(filteredProducts.length / 30)

    if (!fetched) {
        return <Message icon='BsKeyboard' message='Ingrese un término de búsqueda' />
    }

    if (fetched && !allProducts.length) {
        return <Message icon='AiOutlineWarning' message='No se encontraron resultados' />
    }

    const products = filteredProducts.length &&
        filteredProducts
            .slice(30 * page - 29, 30 * page + 1)
            .map(product => <ProductCard key={product.id} product={product} />)


    return (
        <section className='container d-flex px-5'>
            <Filter />
            <div className='col-9 px-4 mt-5'>
                <Order page={page} total={filteredProducts.length} setPage={setPage} />
                <div className='shadow-md rounded-1 products-container'>
                    {products}
                </div>
                <Pagination page={page} setPage={setPage} pageQty={pageQty} />
            </div>
        </section>
    )
}

export default Catalogue