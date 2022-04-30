const CardStock = (props: { qty: number }) => {
    return (
        <span className='me-5'>{props.qty > 0 ? 'Con stock' : 'Sin Stock'}</span>
    )
}

export default CardStock