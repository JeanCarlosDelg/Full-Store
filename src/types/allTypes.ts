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
  category: CategoryType
  // {
  //   idCate: number,
  //   slugCate: string,
  //   nameCate: string  
  // }
}

export type CategoryType = {
  id: number,
  name: string,
  slug: string,
  url: string
}
// export type CategoryType = {
//   id: number,
//   name: string,
//   slug: string,
//   image: {
//     urlImg: string
//   }
// }

export type ResultFilterTypes = {
  schema: {
    attributes: {
      origin: {
        enum: any
      }
    }
  }
}

export type FilterTypes = {
  products: ResultFilterTypes | null,
  loading: boolean,
  error: string
}

export type FinishPay = {
  data: {
    id: number
    captureData: {
      payer: {
        email: string
        name: {
          firstName: string
          lastName: string
        }
      }
    }
    items: ProductsType[]
    total: number
  }
}
