import type { ProductsType } from "@/types/allTypes";
import { transformProductData } from "@/utils/transformProductsData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// export function useGetCategoryProducts(slug: string | undefined) {
export function useGetCategoryProducts() {
  
  const { slug } = useParams()
  const urlBase = import.meta.env.VITE_BACKEND_URL;
  const url = `${urlBase}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;

  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json()
        const newProducts: ProductsType[]  = transformProductData(data)
        setProducts(newProducts)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })();
  }, [url]);

  return { products, loading, error, urlBase };
}
