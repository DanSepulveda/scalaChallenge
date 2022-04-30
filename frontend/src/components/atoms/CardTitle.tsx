const CardTitle = (props: { children: string }) => {
    return (
        <h3 className='fs-5 mt-3 fw-light'>{props.children}</h3>
    )
}

export default CardTitle