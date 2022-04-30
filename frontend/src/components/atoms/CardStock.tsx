const CardStock = (props: { qty: number }) => {
    return (
        <span className='me-5'>{`Stock: ${props.qty}`}</span>
    )
}

export default CardStock