import { ImagesMiniatured } from "@/components/shared/productSared";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";
import type { ProductsType } from "@/types/allTypes";
import { transformPriceData } from "@/utils/transformPriceData";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  product: ProductsType;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeItem, updateQuantity, items } = useCart();
  const currentItem = items.find((item) => item.idProd === product.idProd);

  return (
    <li className="flex py-6 border-b">
      <Link to={`/product/${product.slugProd}`}>
        <ImagesMiniatured url={product.images[0].url} name={product.nameProd} />
      </Link>

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.nameProd}</h2>
          <p className="font-bold">
            {transformPriceData(product.price * (currentItem?.quantity ?? 1))}
          </p>

          <div className="flex gap-3 my-2 items-center">
            <button
              onClick={() =>
                updateQuantity(product.idProd, (currentItem?.quantity ?? 1) - 1)
              }
              className="px-2 py-1 w-7 h-8 text-3xl flex items-center justify-center bg-gray-300 rounded font-extrabold dark:text-red-500 dark:border-[1px] dark:border-red-500 hover:scale-110 transition"
            >
              -
            </button>
            <span>{currentItem?.quantity ?? 1}</span>
            <button
              onClick={() =>
                updateQuantity(product.idProd, (currentItem?.quantity ?? 1) + 1)
              }
              className="px-2 py-1 w-7 h-8 text-3xl flex items-center justify-center font-semibold bg-gray-300 rounded dark:text-red-500 dark:border-[1px] dark:border-red-500 hover:scale-110 transition"
            >
              +
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
              {product.taste}
            </p>
            <p className="px-2 py-1 rounded-full bg-gray-300 text-black dark:bg-red-500 w-fit">
              {product.origin}
            </p>
          </div>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center border shadow-md p-1 hover:scale-110 transition dark:bg-red-500 dark:shadow-slate-200"
            )}
          >
            <X size={20} onClick={() => removeItem(product.idProd)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
