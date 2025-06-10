import type { CategoryType } from "@/types/allTypes";
import { transformCategoryData } from "@/utils/transformCategoryData";
import { useEffect, useState } from "react";

export function useGetCategories() {
  const urlBase = import.meta.env.VITE_BACKEND_URL;
  const url = `${urlBase}/api/categories?populate=*`;

  const [products, setProducts] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async() => {
      try {
        const res = await fetch(url)
        const { data } = await res.json()
        const newCategories: CategoryType[] = transformCategoryData(data)
        setProducts(newCategories)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [url])
  
  return { products, loading, error, urlBase }
}
