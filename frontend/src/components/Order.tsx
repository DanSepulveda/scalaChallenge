import { useContext } from "react"
import ProductContext from "../context/ProductContext"

const Order = () => {
    const { orderByPrice } = useContext(ProductContext)

    return (
        <div className='d-flex justify-content-end mb-3'>
            <span className='me-3'>Ordernar por</span>
            <select onChange={(e) => orderByPrice(e.target.value)}>
                <option value='' disabled>Seleccione</option>
                <option value='low'>Menor precio</option>
                <option value='high'>Mayor precio</option>
            </select>
        </div>
    )
}

export default Order