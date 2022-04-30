import { ProductProps } from '../types'
import CardCondition from './atoms/CardCondition'
import CardPrice from './atoms/CardPrice'
import CardStock from './atoms/CardStock'
import CardTitle from './atoms/CardTitle'

const ProductCard = (props: { product: ProductProps }) => {
    const { title, price, currency_id, available_quantity, condition, thumbnail } = props.product

    return (
        <div className='card-container d-flex border-bottom'>
            <img src={thumbnail} width={120} height={120} className='m-3' />
            <div>
                <CardTitle>{title}</CardTitle>
                <CardPrice currency={currency_id} price={price} />
                <CardStock qty={available_quantity} />
                <CardCondition condition={condition} />
            </div>
        </div>
    )
}

export default ProductCard