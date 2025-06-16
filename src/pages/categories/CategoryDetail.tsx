import { useGetCategoryProducts } from "@/api/UseGetCategoryProducts"
import { Separator } from "@/components/ui/separator";
import type { ProductsType, ResponseType } from "@/types/allTypes"
import { useParams } from "react-router-dom";
import FiltersCategories from "./components/FiltersCategories";
import SkeletonSchema from "@/components/SkeletonSchema";
import { ProductsCartCategory } from "./components/ProductsCartCategory";
import { useState } from "react";

const CategoryDetail = () => {

  const { slug } = useParams();
  const { products, loading }: ResponseType = useGetCategoryProducts()
  
  const [filterOrigin, setFilterOrigin] = useState("")
  
  const FilteredProductOrigin = !loading && products !== null && (
    filterOrigin === '' || filterOrigin === 'Todos'
      ? products 
      : products.filter((product: ProductsType) => product.origin === filterOrigin)
  )
  
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {
        !loading && products !== undefined && (
          <h1 className="text-3xl font-medium"> Café {slug === 'molido' ? slug : `en ${slug}`} y Postres</h1>
        )
      }
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersCategories setFilterOrigin={setFilterOrigin}/>

        <div className="grid gap-5 mt-8 md:grid-cols-2 md:gap-10">
          {
            loading && (
              <SkeletonSchema grid={3} />
            )
          }
          {
            !loading && FilteredProductOrigin !== null && (
              FilteredProductOrigin.map((product: ProductsType) => (
                <ProductsCartCategory key={product.idProd} product={product} />
              ))
            )
          }
          {
            !loading && FilteredProductOrigin !== null && FilteredProductOrigin.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail