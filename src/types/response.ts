export type ResponseType = {
  products: any,
  loading: boolean,
  error: string
}

export type SkeletonSchemaProps = {
  grid: number
}

export type ProductsType = {
  idProd: number,
  slugProd: string,
  nameProd: string,
  description: string,
  active: boolean,
  isFeatured: boolean,
  taste: string,
  origin: string,
  price: number,
  images: {
    idImg: number,
    url: string,
  }[],
  category: {
    idCate: number,
    slugCate: string,
    nameCate: string  
  }
}