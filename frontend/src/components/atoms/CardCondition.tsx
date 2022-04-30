const CardCondition = (props: { condition: string }) => {
    return (
        <span>{props.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
    )
}

export default CardCondition