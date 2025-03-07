import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Product } from "@/app/models/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    console.log("OPTIONS");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    console.log(req.method);
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  console.log("Create product");
  const token = req.headers.authorization?.split(" ")[1] || null;
  if (token !== process.env.API_AUTH_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const {
    title,
    description,
    url,
    afiliate,
    afiliateLink,
    price,
    images,
    reviewVideos,
    video,
  } = req.body;
  if (!title || !description || !url || !images || !reviewVideos) {
    return res
      .status(400)
      .json({
        message:
          "Campos obrigatórios faltando: title, description, url, images ou reviewVideos.",
      });
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
  try {
    const product = await prisma.product.create({
      data: productData, // Enviar os dados do produto no body da requisição
    })
    return res.status(201).json(product);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao criar produto", error });
  }
}
