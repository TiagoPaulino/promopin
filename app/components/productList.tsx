import axios from "axios";
import { Product } from "@/app/models/product";
import { ProductCard } from "./productCard";

export async function ProductList() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
        console.error("NEXT_PUBLIC_API_URL não está definida!");
        return <p></p>;
    }

    try {
        const { data }: { data: Product[] } = await axios.get(`${apiUrl}/api/products/list`);

        return (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3 md:max-w-1/2 mx-auto">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return <p></p>;
    }
}
