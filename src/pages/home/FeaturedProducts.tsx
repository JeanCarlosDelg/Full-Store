import { useGetFeatureProducts } from "@/api/UseGetFeatureProducts";
import LinkButton from "@/components/LinkButton";
import SkeletonSchema from "@/components/SkeletonSchema";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ProductsType, ResponseType } from "@/types/response";
import { Expand, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
  const urlBase = import.meta.env.VITE_BACKEND_URL;

  const { products, loading }: ResponseType = useGetFeatureProducts();
 
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="font-semibold px-6 text-3xl sm:pb-8">
        Productos destacados
      </h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}

          {products !== null &&
            products.map((product: ProductsType) => (
              <CarouselItem
                key={product.idProd}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <div className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center py-2 px-6">
                      <img
                        className="w-[320px] h-[150px] object-cover"
                        src={`${urlBase}${product.images[0].url}`}
                        alt="Image featured"
                      />
                      <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-80 bottom-5">
                        <div className="flex justify-center gap-x-6">
                            <LinkButton to={`/product/${product.slugProd}`}>
                              <Expand size={20} />
                            </LinkButton>
                            <LinkButton to={"/cart"}>
                              <ShoppingCart />
                            </LinkButton>
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex justify-between gap-4 px-8">
                      <h3 className="text-lg font-bold">{product.nameProd }</h3>
                      <div className="flex justify-between items-center gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">{product.taste}</p>
                        <p className="px-2 py-1 rounded-full bg-gray-300 text-black dark:bg-red-500 w-fit">{product.origin}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
