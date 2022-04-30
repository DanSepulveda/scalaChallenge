const CardCondition = (props: { condition: string }) => {
    return (
        <span>{`Estado: ${props.condition === 'new' ? 'Nuevo' : 'Usado'}`}</span>
    )
}

export default CardCondition