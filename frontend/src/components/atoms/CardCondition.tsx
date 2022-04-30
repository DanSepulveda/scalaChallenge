const CardCondition = (props: { condition: string }) => {
    return (
        <span>{`Producto ${props.condition === 'new' ? 'nuevo' : 'usado'}`}</span>
    )
}

export default CardCondition