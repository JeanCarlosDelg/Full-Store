import type { ProductsType } from "@/types/allTypes";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { useLovedProducts } from "@/hooks/useLovedProducts";

interface BottonsModalProps {
  product: ProductsType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLocedProducts = ({ product, setOpenModal }: BottonsModalProps) => {
  const { increaseQuantity } = useCart();
  const { removeloveItem } = useLovedProducts();

  const handleConfirm = () => {
    // ✅ Se ejecuta si el usuario confirma desde el modal
    increaseQuantity(product.idProd);
    removeloveItem(product.idProd);
    setOpenModal(false);
  };

  const handleCancel = () => {
    // ✅ Se ejecuta si el usuario cancela el modal
    setOpenModal(false);
  };

  return (
    <div onClick={handleCancel} className="fixed z-50 inset-0 bg-black/20 backdrop-blur-[5px] flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-5 rounded-3xl flex flex-col justify-center items-center gap-5">
        {/* parte interna del modal */}
        <h2>¿Quieres agregar otro mas al carrito?</h2>
        <div className="flex justify-between gap-7">
          <Button onClick={handleConfirm}>Confirmar</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLocedProducts;
