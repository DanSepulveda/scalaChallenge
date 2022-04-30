import { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import useCondition from '../../hooks/useCondition'

const Radio = (props: { condition: string }): JSX.Element => {
    const { condition } = props
    const state = useCondition(condition)
    const { filterByCondition } = useContext(ProductContext)

    return (
        <div className='d-flex align-items-center'>
            <input type='radio' name='condition' id={condition} value={condition} className='me-3'
                onClick={() => filterByCondition(condition)}
            />
            <label htmlFor={condition}>{state}</label>
        </div>
    )
}

export default Radio