import {
  BottonsMiniatured,
  ImagesMiniatured,
} from "@/components/shared/productSared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ProductsType } from "@/types/allTypes";
import { transformPriceData } from "@/utils/transformPriceData";

type ProductsCartProps = {
  product: ProductsType;
};

export const ProductsCartCategory = ({ product }: ProductsCartProps) => {
  return (
    <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md dark:hover:shadow-red-500">
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
              
              <ImagesMiniatured url={image.url} name="Imagen del producto" />

              <BottonsMiniatured
                slugProd={product.slugProd}
                product={product}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-xl text-center font-bold">{product.nameProd}</p>
      <p className="text-lg text-center font-semibold">
        {transformPriceData(product.price)}
      </p>
    </div>
  );
};
