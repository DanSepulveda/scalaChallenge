const CardImage = (props: { src: string }) => {
    return (
        <img src={props.src} width={120} height={120} className='m-3 me-5' />
    )
}

export default CardImage