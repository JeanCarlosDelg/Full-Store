import { useGetCategories } from "@/api/UseGetCategories";
import type { CategoryType, ResponseType } from "@/types/response";
import { Link } from "react-router-dom";

const ChooseCategory = () => {
  const { products, loading, urlBase }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoria favorita
      </h3>

      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          products !== undefined &&
          products.map((category: CategoryType) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="block w-full max-w-[320px] mx-auto"
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={`${urlBase}${category.image.urlImg}`}
                  alt={category.name}
                  className="w-full h-full object-cover transition duration-300 ease-in-out rounded-lg hover:scale-110"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
