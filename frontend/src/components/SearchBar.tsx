import { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext'
import { BsSearch } from 'react-icons/bs'

const SearchBar = (): JSX.Element => {
    const [value, setValue] = useState<string>('')
    const { getProducts } = useContext(ProductContext)

    return (
        <header className='container-fluid py-4 d-flex justify-content-center align-items-center shadow-sm'>
            <input
                className='py-2 px-3 shadow-sm'
                value={value}
                placeholder='Buscar productos...'
                onChange={(e) => setValue(e.target.value)}
                onKeyDownCapture={(e) => {
                    if (e.key === 'Enter') {
                        value && getProducts(value)
                        setValue('')
                    }
                }}
            />
            <div className='icon-search'
                onClick={() => {
                    value && getProducts(value)
                    setValue('')
                }}
            >
                <BsSearch />
            </div>
        </header>
    )
}

export default SearchBar