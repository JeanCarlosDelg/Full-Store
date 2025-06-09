import { createContext, useState, type ReactNode } from 'react';

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description?: string
}

interface ProductContextType {
  products: Product[]
  // setProducts: (products: Product[]) => void
  // getProductById: (id: number) => Product | undefined
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode}) {

  const [products, setProducts] = useState<Product[]>([])
  
  return (
    <ProductContext.Provider value={{
      products
    }}>
      { children }
    </ProductContext.Provider>
  )
}