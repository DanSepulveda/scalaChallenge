import formatter from "../../utils/formatDate"

const CardPrice = (props: { price: number, currency: string }) => {
    const { price, currency } = props
    return (
        <h4 className='fs-5 mt-1 mb-3 fw-normal'>{`${currency} ${formatter.format(price)}`}</h4>
    )
}

export default CardPrice