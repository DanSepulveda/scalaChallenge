import axios from 'axios'
import { ProductType } from '../types'
import { Request, Response } from 'express'

const productControllers = {
    getProducts: async (req: Request, res: Response) => {
        const { query } = req.query

        try {
            // Getting products array from MELI API
            const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            const { results } = response.data

            // Creating an empty array to load products on it
            const products: ProductType[] = []

            // Mapping products array and generate new object with required keys
            results.map((product: ProductType) => {
                const { id, title, price, currency_id, available_quantity, thumbnail, condition } = product
                const productWithMainAttributes = {
                    id,
                    title,
                    price,
                    currency_id,
                    available_quantity,
                    thumbnail,
                    condition
                }
                // Adding product object with filtered keys to new array
                products.push(productWithMainAttributes)
            })

            res.status(200).json({ success: true, response: products })
        } catch (error: unknown) {
            res.json({ success: false, response: error })
        }
    }
}

export default productControllers