import type { ProductsType } from "@/types/allTypes";
import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProduct extends ProductsType {
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  addItem: (data: ProductsType) => void;
  increaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductsType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.idProd === data.idProd
        );

        if (existingItem) {
          return toast.error("Lo siento mucho", {
            description: "Este producto ya fue agregado.",
          });
        }

        set({
          items: [...get().items, { ...data, quantity: 1 }],
        });
        toast.success("Producto añadido al carrito 🛒");
      },

      increaseQuantity: (id: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.idProd === id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
          ),
        }));
        toast.success("Cantidad aumentada 🧮");
      },

      removeItem: (id: number) => (
        set({ items: [...get().items.filter((item) => item.idProd !== id)] }),
        toast.success("Producto eliminado 🚮")
      ),

      updateQuantity: (id: number, quantity: number) => {
        set({
          items: get().items.map((item) =>
            item.idProd === id
              ? { ...item, quantity: Math.max(quantity, 1) }
              : item
          ),
        });
      },

      removeAll: () => {
        set({ items: [] })
        localStorage.removeItem("cart-storage")
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
