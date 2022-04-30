import axios from 'axios'
import { ProductType } from '../types'
import { Request, Response } from 'express'
import cache from '../productCache'
import removeDiacritics from '../normalize'

const productControllers = {
    getProducts: async (req: Request, res: Response) => {
        let { query } = req.query
        query = removeDiacritics(query)

        const values = cache.get(`${query}`)

        // Verifying if search is cached
        if (!values) {
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

                // Saving search in cache
                cache.set(`${query}`, products)
                res.status(200).json(products)
            } catch (error: unknown) {
                res.json(error)
            }
        } else {
            // Responding with cached products
            res.status(200).json(values)
        }
    }
}

export default productControllers