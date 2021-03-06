const CardPrice = (props: { price: number, currency: string }): JSX.Element => {
    const { price, currency } = props

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: currency ? currency : 'CLP',
    })

    return (
        <h4 className='fs-5 mt-1 mb-3 fw-normal'>{formatter.format(price)}</h4>
    )
}

export default CardPrice