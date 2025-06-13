import type { ProductsType } from "@/types/allTypes";
import { transformOneProduct } from "@/utils/transformOneProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetProductSlug() {
  
  const { slug } = useParams()
  const urlBase = import.meta.env.VITE_BACKEND_URL;
  const url = `${urlBase}/api/products?populate=*&filters[slug][$eq]=${slug}`;

  const [products, setProducts] = useState<ProductsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json()
        const newProduct: ProductsType = transformOneProduct(data[0])
        setProducts(newProduct)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })();
  }, [url]);

  return { products, loading, error };
}
