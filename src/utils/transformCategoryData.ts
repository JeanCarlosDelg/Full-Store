import type { CategoryType } from "@/types/allTypes";

export function transformCategoryData(data: any[]): CategoryType[] {
  return data.map((category): CategoryType => {
    const { id, slug, categoryName, mainImage } = category;

    return {
      id,
      slug: slug,
      name: categoryName,
      url: mainImage
      // image: mainImage
      //   ? {
      //       urlImg: mainImage.url,
      //     }
      //   : {
      //       urlImg: mainImage.url,
      //     },
    };
  });
}
