import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const products = await prisma.product.findMany();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao listar produtos', error });
    }
}
