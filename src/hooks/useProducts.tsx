import type { CategoryType, ProductsType } from "@/types/allTypes";
import { create } from "zustand";
import productsMock from "@/mocks/productsMock.json";
import categoriesMock from "@/mocks/categoryMocks.json";
import { transformProductData } from "@/utils/transformProductsData";
import { transformCategoryData } from "@/utils/transformCategoryData";
interface ProductsStore {
  products: ProductsType[];
  filtered: ProductsType[];
  isFeatured: ProductsType[];
  categories: CategoryType[];
  loading: boolean;
  error: string;
  getProductByOrigin: (origin: string, slugCate: string) => ProductsType[];
  getOrigin: () => string[];
  loadProduct: () => void;
  filterByCategory: (categoria: string) => void;
  filterBySlug: (slug: string) => ProductsType | null
}

const newProducts: ProductsType[] = transformProductData(productsMock);
const newCategories: CategoryType[] = transformCategoryData(categoriesMock);

export const useProducts = create<ProductsStore>((set, get) => ({
  products: newProducts,

  filtered: [],

  categories: [],

  isFeatured: [],

  loading: false,

  error: "",

  loadProduct: () => {
    try {
      set({ loading: true, error: "" });

      const featured = newProducts.filter((item) => item.isFeatured === true);

      setTimeout(() => {
        set({
          filtered: newProducts,
          categories: newCategories,
          isFeatured: featured,
          loading: false,
        });
      }, 500);
    } catch (error) {
      set({ error: "Error al cargar productos", loading: false });
    }
  },

  getOrigin: () => {
    const products = get().products;
    const origins = products.map((p) => p.origin.trim());
    const uniqueOrigins = ["Todos", ...new Set(origins)];
    return uniqueOrigins;
  },

  getProductByOrigin: (origin, slugCate) => {
    const { products } = get();

    return products.filter((item) => {
      const matchOrigin =
        origin === "Todos" || origin === "" || item.origin === origin;
      const matchCategory = item.category.slug === slugCate;
      return matchOrigin && matchCategory;
    });
  },

  filterBySlug: (slug) => {
    const { products } = get();
    return products.find((item) => item.slugProd === slug) || null;
  },

  filterByCategory: (categoria) =>
    set((state) => ({
      filtered: state.products.filter(
        (item) => item.category.name === categoria
      ),
    })),
}));
