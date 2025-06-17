import { Expand, ShoppingCart } from "lucide-react";
import LinkButton from "../LinkButton";
import ButtonIcon from "../ButtonIcon";
import { useCart } from "@/hooks/useCart";
import type { ProductsType } from "@/types/allTypes";

interface OriginAndTasteProps {
  taste: string;
  origin: string;
}

export const OriginAndTaste = ({ taste, origin }: OriginAndTasteProps) => {
  return (
    <div className="flex justify-between items-center gap-3">
      <p className="px-2 py-1 text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
        {taste}
      </p>
      <p className="px-2 py-1 rounded-full bg-gray-300 text-black dark:bg-red-500 w-fit">
        {origin}
      </p>
    </div>
  );
};

interface BottonsMiniaturedProps {
  slugProd: string;
  product: ProductsType;
}

export const BottonsMiniatured = ({
  slugProd,
  product,
}: BottonsMiniaturedProps) => {
  const { addItem } = useCart();

  return (
    <div className="absolute w-full px-6 transition duration-200 
opacity-100 md:opacity-0 md:group-hover:opacity-100 bottom-5">
      <div className="flex justify-center gap-x-6">
        <LinkButton to={`/product/${slugProd}`}>
          <Expand size={20} />
        </LinkButton>
        <ButtonIcon onClick={() => addItem(product)}>
          <ShoppingCart />
        </ButtonIcon>
      </div>
    </div>
  );
};


interface ImagesMiniaturedProps {
  url: string
  name: string
}

export const ImagesMiniatured = ({ url, name }:ImagesMiniaturedProps) => {

  return (
    <img
      src={url}
      alt={name}
      className="w-[175px] h-[175px] overflow-hidden rounded-md sm:w-50 sm:h-32 object-cover"
    />
  );
};
