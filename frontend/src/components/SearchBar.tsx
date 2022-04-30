import { useState } from 'react'

const SearchBar = (): JSX.Element => {
    const [value, setValue] = useState<string>('')

    const getProducts = (value: string) => {
        return value
    }

    return (
        <header className='container-fluid bg-warning'>
            <h1>Buscar productos en Mercado Libre</h1>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Buscar productos...'
                onKeyDownCapture={(e) => {
                    if (e.key === 'Enter') {
                        getProducts(value)
                    }
                }}
            />
            <button>Buscar</button>
        </header>
    )
}

export default SearchBar