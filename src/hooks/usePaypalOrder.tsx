import type { FinishPay } from "@/types/allTypes";
import { create } from "zustand";


type PaypalOrderStore = {
  // orderData: PaypalOrder | null;
  orderData: FinishPay | null
  setOrderData: (data: FinishPay) => void;
  // clearOrderData: () => void;
};

export const usePaypalOrder = create<PaypalOrderStore>((set) => ({
  orderData: null,
  setOrderData: (data) => set({ orderData: data }),
  // clearOrderData: () => set({ orderData: null }),
}));
