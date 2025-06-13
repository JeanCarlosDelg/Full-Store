import type { ProductsType } from "@/types/allTypes";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  lovedItems: ProductsType[]
  addLovedItem: (data: ProductsType) => void
  removeloveItem: (id: number) => void
  removeAllLovedItems: () => void
}

export const useLovedProducts = create(persist<CartStore>((set, get) => ({
  lovedItems: [],
  addLovedItem: (data: ProductsType) => {
    const currentItems = get().lovedItems
    const existingItem = currentItems.find((item) => item.idProd === data.idProd)

    if (existingItem) {
      return toast.error("Lo siento mucho", {
        description: "Este producto ya fue agregado.",
      })
    }

    set({
      lovedItems: [ ...get().lovedItems, data]
    })
    toast.success(`Producto añadido a tus favoritos ${<Heart className="text-red-500 fill-red-500"/>}`)
  },

  removeloveItem: (id: number) => {
    set({lovedItems: [ ...get().lovedItems.filter((item) => item.idProd !== id)]}),
    toast.success("Producto eliminado de tus favoritos 😢")
  },

  removeAllLovedItems: () => set({lovedItems: []})


}), {
  name: "lovePorduct-storage",
  storage: createJSONStorage(() => localStorage)
}))