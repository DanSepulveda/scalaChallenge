import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Filter from './Filter'
import Message from './Message'
import Pagination from './Pagination'
import ProductCard from './ProductCard'

const Catalogue = (): JSX.Element => {
    const { filteredProducts, fetched, allProducts } = useContext(ProductContext)
    const products = filteredProducts.map(product => <ProductCard key={product.id} product={product} />)

    if (!fetched) {
        return <Message icon='BsKeyboard' message='Ingrese un término de búsqueda' />
    }

    if (fetched && !allProducts.length) {
        return <Message icon='AiOutlineWarning' message='No se encontraron resultados' />
    }

    return (
        <section className='container d-flex px-5'>
            <Filter />
            <div className='col-9 px-4 mt-5'>
                <span>{`Mostrando 1-30 de 50`}</span>
                <span>ordernar productos</span>
                <div className='shadow-md rounded-1 products-container'>
                    {products}
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export default Catalogue