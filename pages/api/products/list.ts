import { NextApiRequest, NextApiResponse } from 'next';
import { productController } from '@/core/controller/product.controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const products = await productController.findAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao listar produtos', error });
    }
}
