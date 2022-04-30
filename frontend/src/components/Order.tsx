import { useContext } from "react"
import ProductContext from "../context/ProductContext"
import { OrderProps } from "../types"

const Order = (props: OrderProps) => {
    const { orderByPrice } = useContext(ProductContext)
    const { page, total, setPage } = props

    const first = 30 * page - 29
    const last = 30 * page > total ? total : 30 * page
    const info = `Mostrando ${first}-${last} de ${total}`

    return (
        <div className='d-flex justify-content-between mb-3'>
            <span>{info}</span>
            <div>
                <span className='me-3'>Ordernar por</span>
                <select defaultValue='' onChange={(e) => {
                    setPage(1)
                    orderByPrice(e.target.value)
                }} >
                    <option value='' disabled>Seleccione</option>
                    <option value='low'>Menor precio</option>
                    <option value='high'>Mayor precio</option>
                </select>
            </div>
        </div>
    )
}

export default Order