export type ResponseType = {
  products: any,
  loading: boolean,
  error: string,
  urlBase?: string
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
  quantity?: number,
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

export type CategoryType = {
  id: number,
  name: string,
  slug: string,
  image: {
    urlImg: string
  }
}

export type FilterTypes = {
  products: ResultFilterTypes | null,
  loading: boolean,
  error: string
}

export type ResultFilterTypes = {
  schema: {
    attributes: {
      origin: {
        enum: any
      }
    }
  }
}

export type FilterOriginProps = {
  setFilterOrigin: (origin: string) => void
}
