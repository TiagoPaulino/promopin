import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const product = await prisma.product.create({
      data: req.body, // Enviar os dados do produto no body da requisição
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar produto', error });
  }
}
