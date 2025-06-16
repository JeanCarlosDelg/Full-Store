import ModalLocedProducts from "@/components/ModalLocedProducts";
import {
  ImagesMiniatured,
  OriginAndTaste,
} from "@/components/shared/productSared";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useLovedProducts } from "@/hooks/useLovedProducts";
import { cn } from "@/lib/utils";
import type { ProductsType } from "@/types/allTypes";
import { transformPriceData } from "@/utils/transformPriceData";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ItemLoveProductProps {
  product: ProductsType
}

const ItemLoveProduct = ({ product }: ItemLoveProductProps) => {
  const [openModal, setOpenModal] = useState(false);

  const { items, addItem } = useCart();
  const { removeloveItem } = useLovedProducts();

  const addToCheckout = () => {
    const existingProduct = items.find(
      (item) => item.idProd === product.idProd
    );
    if (existingProduct) {
      setOpenModal(true)
    } else {
      addItem(product);
      removeloveItem(product.idProd);
    }
  };

  return (
    <>
      <li className="flex py-6 border-b">
        <Link to={`/product/${product.slugProd}`}>
          <ImagesMiniatured
            url={product.images[0].url}
            name="Imagen del product"
          />
        </Link>

        <div className="flex justify-between flex-1 px-6">
          <div>
            <h2 className="text-lg font-bold">{product.nameProd}</h2>
            <p className="font-bold mb-1">
              {transformPriceData(product.price)}
            </p>

            <OriginAndTaste origin={product.origin} taste={product.taste} />

            <Button className="mt-2 rounded-full" onClick={addToCheckout}>
              Añadir al carrito
            </Button>
          </div>
          <div>
            <button
              className={cn(
                "rounded-full flex items-center justify-center border shadow-md p-1 hover:scale-110 transition dark:bg-red-500 dark:shadow-slate-200"
              )}
            >
              <X size={20} onClick={() => removeloveItem(product.idProd)} />
            </button>
          </div>
        </div>
      </li>
      {openModal && <ModalLocedProducts product={product} setOpenModal={setOpenModal} />}
    </>
  );
};

export default ItemLoveProduct;
