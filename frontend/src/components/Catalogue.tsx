import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Filter from './Filter'
import ProductCard from './ProductCard'

const Catalogue = () => {
    const { filteredProducts } = useContext(ProductContext)

    return (
        <section className='container d-flex px-5'>
            <Filter />
            <div className='col-9 px-4 mt-5'>
                <p>ordernar productos</p>
                <div className='shadow-md rounded-1 products-container'>
                    {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    )
}

export default Catalogue