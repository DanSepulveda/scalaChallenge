import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Radio from './atoms/Radio'

const Filter = (): JSX.Element => {
    const { allProducts, filterByCondition } = useContext(ProductContext)

    // Generating array with possible conditions
    let conditions = allProducts.map((product) => product.condition)
    conditions = conditions.filter((condition, index) => conditions.indexOf(condition) === index)

    // Generating radio buttons options
    const options = conditions.map(condition => <Radio key={condition} condition={condition} />)

    return (
        <div className='col-3 mt-5'>
            <div className='filter-container p-3'>
                <p className='fw-bold mb-2'>Condición</p>
                <input type='radio' name='condition' id='all' value='' className='me-3'
                    onClick={() => filterByCondition('')}
                />
                <label htmlFor='all'>Todos</label>
                {options}
            </div>
        </div>
    )
}

export default Filter