import type { ResultFilterTypes } from "@/types/allTypes";
import { useEffect, useState } from "react";

export function useGetOriginProducts() {
  
  const urlBase = import.meta.env.VITE_BACKEND_URL;
  const url = `${urlBase}/api/content-type-builder/content-types/api::product.product`;

  const [products, setProducts] = useState<ResultFilterTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        setProducts(data)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })();
  }, [url]);

  return { products, loading, error };
}
