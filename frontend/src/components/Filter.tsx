import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Radio from './atoms/Radio'

const Filter = (): JSX.Element => {
    const { allProducts, filterByCondition, search } = useContext(ProductContext)

    // Generating array with possible conditions
    let conditions = allProducts.map((product) => product.condition)
    conditions = conditions.filter((condition, index) => conditions.indexOf(condition) === index)

    // Generating radio buttons options
    const options = conditions.length > 1 && conditions.map(condition => <Radio key={condition} condition={condition} />)

    // All products radio button
    const allProductsOption = conditions.length > 1 &&
        <>
            <input type='radio' name='condition' id='all' value='' className='me-3' onClick={() => filterByCondition('')} />
            <label htmlFor='all'>Todos</label>
        </>

    // Conditional filter section title
    const title = conditions.length > 1 ? 'Condición' : 'No existen filtros asociados'

    return (
        <div className='col-3 mt-5'>
            <h4>{search}</h4>
            <span className='fw-light'>{`${allProducts.length} productos`}</span>
            <div className='filter-container p-3 mt-4 rounded-1 shadow-md'>
                <p className='fw-bold mb-2'>{title}</p>
                {allProductsOption}
                {options}
            </div>
        </div>
    )
}

export default Filter