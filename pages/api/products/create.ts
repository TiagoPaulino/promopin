import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { Product } from '@/app/models/product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS: Adiciona os cabeçalhos para permitir requisições da sua extensão
  res.setHeader('Access-Control-Allow-Origin', 'chrome-extension://ccnlngcckigaiffpbbadalidohbhojad'); // ID da sua extensão
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
  
  // Se a requisição for OPTIONS (preflight request), responde com 200 OK
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const token = req.headers.authorization?.split(' ')[1] || null;
    if (token !== process.env.API_AUTH_KEY) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, description, url, afiliate, afiliateLink, price, images, reviewVideos, video } = req.body;
    if (!title || !description || !url || !images || !reviewVideos) {
      return res.status(400).json({ message: 'Campos obrigatórios faltando: title, description, url, images ou reviewVideos.' });
    }

    const productData: Product = {
      title: title,
      description: description,
      url: url,
      afiliate: afiliate,
      afiliateLink: afiliateLink,
      price: price || 0.0,
      images: images,
      reviewVideos: reviewVideos,
      video: video,
      clicks: 0,
    };

    const product = await prisma.product.create({
      data: productData, // Enviar os dados do produto no body da requisição
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar produto', error });
  }
}
