import type { CategoryType } from "@/types/response";

export function transformCategoryData(data: any[]): CategoryType[] {
  return data.map((category): CategoryType => {
    const { id, slug, categoryName, mainImage } = category;

    return {
      id,
      slug: slug,
      name: categoryName,
      image: mainImage
        ? {
            urlImg: mainImage.url,
          }
        : {
            urlImg: mainImage.url,
          },
    };
  });
}
