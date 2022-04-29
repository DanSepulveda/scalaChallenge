import express from 'express'
import productControllers from '../controllers/productControllers'

const router = express.Router()

router.route('/search')
    .get(productControllers.getProducts)

export default router