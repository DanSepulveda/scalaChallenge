import useCondition from '../../hooks/useCondition'

const CardCondition = (props: { condition: string }): JSX.Element => {
    const state = useCondition(props.condition)

    return (
        <span>{state}</span>
    )
}

export default CardCondition