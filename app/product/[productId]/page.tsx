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
            <h1>{product?.title || "Produto não encontrado"}</h1>
            <p>{product?.description}</p>
        </div>
    );
}
