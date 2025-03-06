
import axios from "axios";
import { Product } from "@/app/models/product";
import {ProductCard} from "./productCard";
import { env } from "process";

export async function ProductList() {
    const apiUrl = env.NEXT_PUBLIC_API_URL
    const productList: { data: Product[] } =  await axios.get(`${apiUrl}/api/products/list`);


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3 md:max-w-1/2 mx-auto">
            {productList.data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}