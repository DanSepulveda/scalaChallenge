import Catalogue from './Catalogue'
import SearchBar from './SearchBar'
import Message from './Message'
import { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import { useLocation } from 'react-router-dom'

const Main = () => {
    const { loading, getProducts } = useContext(ProductContext)
    const pathname = useLocation().pathname

    useEffect(() => {
        if (pathname !== '/') {
            const query = pathname.slice(1).replaceAll('%20', ' ')
            getProducts(query)
        }
        //eslint-disable-next-line
    }, [])

    // Showing message while retrieving products
    const showComponent = loading
        ? <Message icon='BiSearch' message='Buscando productos...' />
        : <Catalogue />

    return (
        <main className='container-fluid p-0'>
            <SearchBar />
            {showComponent}
        </main>
    )
}

export default Main