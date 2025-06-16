import { useGetProductSlug } from "@/api/UseGetProductSlug";
import type { ResponseType } from "@/types/allTypes";
import { SkeletonProducts } from "./components/SkeletonProducts";
import { CarouselProduct } from "./components/CarouselProduct";
import InfoProduct from "./components/InfoProduct";
import { Navigate } from "react-router-dom";

const Products = () => {
  const { products, loading }: ResponseType = useGetProductSlug();

  if (loading) {
    return <SkeletonProducts />;
  }

  if (!products) return <Navigate to={"*"}/>;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid md:grid-cols-2">
        <div>
          <CarouselProduct images={products.images} />
        </div>
        <div className="sm:px-12">
          <InfoProduct product={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
