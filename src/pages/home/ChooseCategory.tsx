import { useProducts } from "@/hooks/useProducts"
import type { CategoryType } from "@/types/allTypes"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ChooseCategory = () => {
  const { loading, loadProduct, categories} = useProducts()

  useEffect(() => {
    loadProduct()
  }, [])
  

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl font-semibold sm:pb-8">
        Elige tu categoria favorita
      </h3>

      <div className="grid grid-cols-3 gap-0 sm:gap-6 place-items-center">
        {!loading &&
          categories !== undefined &&
          categories.map((category: CategoryType) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="w-full"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                <img
                  src={category.url}
                  alt={category.name}
                  className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
                />
              <p className="absolute w-full py-2 text-lg font-semibold text-center text-white bottom-5 backdrop-blur-lg first-letter:uppercase dark:text-red-500 dark:font-bold">{category.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div> 
  );
};

export default ChooseCategory;
