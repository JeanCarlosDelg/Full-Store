import type { ProductsType } from "@/types/allTypes";

export function transformProductData(data: any[]): ProductsType[] {
  return data.map((product): ProductsType => {
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
            idCate: category.id,
            slugCate: category.slug,
            nameCate: category.categoryName,
          }
        : {
            idCate: 0,
            slugCate: "",
            nameCate: "",
          },
    };
  });
}