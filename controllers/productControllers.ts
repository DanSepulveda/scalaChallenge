import { Request, Response } from 'express'

const productControllers = {
    getProducts: (req: Request, res: Response) => {
        res.json({ success: true, message: 'working' })
    }
}

export default productControllers