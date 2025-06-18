import {
  BottonsMiniatured,
  ImagesMiniatured,
  OriginAndTaste,
} from "@/components/shared/productSared";
import SkeletonSchema from "@/components/SkeletonSchema";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProducts } from "@/hooks/useProducts";
import type { ProductsType } from "@/types/allTypes";
import { useEffect } from "react";

const FeaturedProducts = () => {

  const { isFeatured, loadProduct, loading } = useProducts()

  useEffect(() => {
    loadProduct()
  }, [])

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="font-semibold px-6 text-3xl sm:pb-8">
        Productos destacados
      </h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}

          {isFeatured !== null &&
            isFeatured.map((product: ProductsType) => (
              <CarouselItem
                key={product.idProd}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <div className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center py-2 px-6">

                      <ImagesMiniatured
                        url={product.images[0].url}
                        name={product.nameProd}
                      />

                      <BottonsMiniatured
                        slugProd={product.slugProd}
                        product={product}
                      />

                    </CardContent>
                    <div className="flex justify-between gap-4 px-8">
                      
                      <h3 className="text-lg font-bold">{product.nameProd}</h3>

                      <OriginAndTaste
                        origin={product.origin}
                        taste={product.taste}
                      />
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
