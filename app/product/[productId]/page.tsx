import Carroussel from "@/app/components/productPage/Carroussel";
import VideoReviews from "@/app/components/productPage/VideoReviews";
import { Product } from "@/app/models/product";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/find?productId=${productId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return <p>Erro ao carregar produto</p>;
  }

  const product: Product = await res.json();

  return (
    <div className="flex flex-col md:max-w-2/3 md:mx-auto md:pt-10 md:overflow-hidden md:rounded-2xl md:gap-5">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center w-full md:w-1/2 overflow-hidden rounded-l-2xl">
          <Carroussel images={product.images} />
        </div>
        <div className="pt-5 px-3 flex gap-5 flex-col bg-white rounded-2xl md:w-1/2 md:rounded-l-none">
          <h1 className="text-2xl font-bold line-clamp-3">{product.title}</h1>
          <Link
            className="font-bold flex justify-center text-2xl rounded-2xl bg-black text-white py-2"
            href={product.afiliate || product.afiliateLink || product.url}
            target="_blank"
          >
            Ver Oferta
          </Link>
        </div>
      </div>
      <div className="pt-5 px-3 flex gap-5 flex-col bg-white">
        <p className="line-clamp-3 ">{product.description}</p>
        {product.reviewVideos.length != 0 && (
          <VideoReviews videos={product.reviewVideos} />
        )}
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl font-bold">Imagens</h5>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {product.images.map(
              (image, index) =>
                image !=
                  "https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp4a6zr9hdte6" && (
                  <div key={index} className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      className="w-full"
                      alt="product"
                      key={index}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
