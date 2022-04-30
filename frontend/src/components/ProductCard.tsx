import { ProductProps } from '../types'
import CardImage from './atoms/CardImage'
import CardTitle from './atoms/CardTitle'
import CardPrice from './atoms/CardPrice'
import CardStock from './atoms/CardStock'
import CardCondition from './atoms/CardCondition'

const ProductCard = (props: { product: ProductProps }): JSX.Element => {
    const { title, price, currency_id, available_quantity, condition, thumbnail } = props.product

    return (
        <div className='d-flex border-bottom pe-4'>
            <CardImage src={thumbnail} />
            <div>
                <CardTitle>{title}</CardTitle>
                <CardPrice currency={currency_id} price={price} />
                <CardStock qty={available_quantity} />
                <CardCondition condition={condition} />
            </div>
        </div >
    )
}

export default ProductCard