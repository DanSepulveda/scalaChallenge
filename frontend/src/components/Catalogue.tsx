import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Filter from './Filter'
import Message from './Message'
import ProductCard from './ProductCard'

const Catalogue = () => {
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
                <p>ordernar productos</p>
                <p>{filteredProducts.length}</p>
                <div className='shadow-md rounded-1 products-container'>
                    {products}
                </div>
            </div>
        </section>
    )
}

export default Catalogue