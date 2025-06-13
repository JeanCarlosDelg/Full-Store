import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useLovedProducts } from "@/hooks/useLovedProducts";
import type { ProductsType } from "@/types/allTypes";
import { transformPriceData } from "@/utils/transformPriceData";
import { Heart } from "lucide-react";

type InfoProductProps = {
  product: ProductsType;
};

const InfoProduct = ({ product }: InfoProductProps) => {

  const { addItem } = useCart()
  const { addLovedItem } = useLovedProducts()

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl mt-5">{product.nameProd}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
            {product.taste}
          </p>
          <p className="px-2 py-1 text-xs rounded-full bg-gray-300 text-black dark:bg-red-500 w-fit">
            {product.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{transformPriceData(product.price)}</p>

      <div className="flex items-center gap-5">
        <Button className="w-[70%]" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black dark:text-red-500 dark:hover:fill-red-500" 
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
