import Image from "next/image";
import { Product } from "../models/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div>
      <Link href={props.product.afiliate || props.product.url} target="_blank" >
        <div className="w-full flex flex-col gap-2 max-h-80 border border-gray-300 p-3 rounded-2xl bg-white hover:shadow-2xl">
          <div className="w-full flex items-center justify-center overflow-hidden rounded-2xl ">
            <Image
              className="w-full h-full"
              src={props.product.images[3]}
              alt="product"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col w-full">
            <h3 className=" overflow-hidden line-clamp-2 text-overflow-ellipsis max-h-12">
              {props.product.title}
            </h3>
          </div>
          <div>
            <div className="font-bold flex justify-center">Ver Oferta</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
