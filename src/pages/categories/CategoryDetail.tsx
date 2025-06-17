// import { useGetCategoryProducts } from "@/api/UseGetCategoryProducts";
import { Separator } from "@/components/ui/separator";
import type { ProductsType } from "@/types/allTypes";
import { useParams } from "react-router-dom";
import FiltersCategories from "./components/FiltersCategories";
import SkeletonSchema from "@/components/SkeletonSchema";
import { ProductsCartCategory } from "./components/ProductsCartCategory";
import { useEffect, useState } from "react";
import { useProducts } from "@/hooks/useProducts";

const CategoryDetail = () => {
  const { slug } = useParams();
  const [filterOrigin, setFilterOrigin] = useState("");
  
  const {
    loading,
    loadProduct,
    getProductByOrigin,
  } = useProducts();

  useEffect(() => {
    loadProduct();
  }, []);

  const originProduct = getProductByOrigin(filterOrigin, slug ?? '');

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {!loading && originProduct !== undefined && (
        <h1 className="text-3xl font-medium">
          {" "}
          Café {slug === "molido" ? slug : `en ${slug}`} y Postres
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersCategories setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 md:grid-cols-2 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {!loading &&
            originProduct !== null &&
            originProduct.map((product: ProductsType) => (
              <ProductsCartCategory key={product.idProd} product={product} />
            ))}
          {!loading && originProduct !== null && originProduct.length === 0 && (
            <p>No hay productos con este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
