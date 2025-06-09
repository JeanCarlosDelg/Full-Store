import { transformProductData } from "@/utils/transformProductsData";
import type { ProductsType } from "@/types/response";
import { useEffect, useState } from "react";

export function useGetFeatureProducts() {
  const urlBase = import.meta.env.VITE_BACKEND_URL;

  const url = `${urlBase}/api/products?filters[isFeatured][$eq]=true&populate=*`;

  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        const newProducts: ProductsType[] = transformProductData(data)
        setProducts(newProducts);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { products, loading, error };
}
