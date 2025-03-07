'use client'
import axios from "axios";
import { Product } from "@/app/models/product";
import { ProductCard } from "./productCard";
import { useEffect, useState } from "react";

export function ProductList() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response: { data: Product[] } = await axios.get(`${apiUrl}/api/products/list`);
                setProducts(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        fetchProducts();
    },[])

   return (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3 md:max-w-1/2 mx-auto">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
}
