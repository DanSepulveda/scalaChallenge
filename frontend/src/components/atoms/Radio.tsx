import { useContext, Dispatch, SetStateAction } from 'react'
import ProductContext from '../../context/ProductContext'
import useCondition from '../../hooks/useCondition'

const Radio = (props: { condition: string, setPage: Dispatch<SetStateAction<number>> }): JSX.Element => {
    const { condition, setPage } = props
    const state = useCondition(condition)
    const { filterByCondition } = useContext(ProductContext)

    return (
        <div className='d-flex align-items-center'>
            <input type='radio' name='condition' id={condition} value={condition} className='me-3'
                onClick={() => {
                    filterByCondition(condition)
                    setPage(1)
                }}
            />
            <label htmlFor={condition}>{state}</label>
        </div>
    )
}

export default Radio