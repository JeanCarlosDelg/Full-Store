import type { ProductsType } from "@/types/allTypes";

export function transformOneProduct(product: any): ProductsType {
    const {
      id,
      slug,
      productName,
      description,
      active,
      isFeatured,
      taste,
      origin,
      price,
      images,
      category,
    } = product;

    return {
      idProd: id,
      slugProd: slug,
      nameProd: productName,
      description,
      active,
      isFeatured,
      taste,
      origin,
      price,
      images: images.map((img: any) => ({
            idImg: img.id,
            url: img.url,
          })) || [],
      category: category
        ? {
            id: category.id,
            slug: category.slug,
            name: category.categoryName,
            url: category.url
          }
        : {
            id: 0,
            slug: "",
            name: "",
            url: ""
          }
    };
}