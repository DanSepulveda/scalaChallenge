const CardStock = (props: { qty: number }): JSX.Element => {
    const { qty } = props

    return (
        <span className={`me-5 ${qty > 0 ? 'green' : 'red'}`}>
            {qty > 0 ? 'Con stock' : 'Sin Stock'}
        </span>
    )
}

export default CardStock