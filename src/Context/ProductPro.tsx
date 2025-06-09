import { createContext, type ReactNode } from 'react';

type ProductContextType = {
  prueba: string;
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode}) {

  const prueba:string = "hello wold"
  
  return (
    <ProductContext.Provider value={{ prueba }}>
      { children }
    </ProductContext.Provider>
  )
}