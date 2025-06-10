import LinkButton from "@/components/LinkButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ProductsType } from "@/types/allTypes";
import { transformPriceData } from "@/utils/transformPriceData";
import { Expand, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

type ProductsCartProps = {
  product: ProductsType;
  url: string | undefined;
};

export const ProductsCartCategory = ({ product, url }: ProductsCartProps) => {
  return (
    <Link
      to={`/product/${product.slugProd}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md dark:hover:shadow-red-500"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
          {product.taste}
        </p>
        <p className="px-2 py-1 text-xs rounded-full bg-gray-300 text-black dark:bg-red-500 w-fit">
          {product.origin}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.idImg} className="group">
              <img
                src={`${url}${image.url}`}
                alt="imagen del Producto"
                className="rounded-xl w-[320px] h-[150px] object-cover"
              />

              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <LinkButton to={`/product/${product.slugProd}`}>
                    <Expand size={20} />
                  </LinkButton>
                  <LinkButton to={""}>
                    <ShoppingCart />
                  </LinkButton>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-xl text-center font-bold">{product.nameProd}</p>
      <p className="text-lg text-center font-semibold">{transformPriceData(product.price)}</p>
    </Link>
  );
};
