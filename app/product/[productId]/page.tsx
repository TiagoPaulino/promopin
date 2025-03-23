import Carroussel from "@/app/components/productPage/Carroussel";
import { Product } from "@/app/models/product";

export default async function ProductPage({ params }: { params: { productId: string } }) {
    const {productId} = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/find?productId=${productId}`, {
        cache: "no-store", 
    });

    if (!res.ok) {
        return <p>Erro ao carregar produto</p>;
    }

    const product: Product = await res.json();

    return (
        <div>
            <h1>{product.title}</h1>
            <div className="flex items-center justify-center w-full">
                <Carroussel images={product.images} />
            </div>
            
        </div>
    );
}
