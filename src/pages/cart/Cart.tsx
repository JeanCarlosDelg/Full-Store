import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { transformPriceData } from "@/utils/transformPriceData";
import CartItem from "./component/CartItem"
// import PayPalButtonComponent from "../paypal/components/PayPalButtonComponent";
import RealPaypalButton from "../paypal/components/RealPaypalButton";

const Cart = () => {
  
  const { items } = useCart()

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        {items.length === 0 && <p>No hay productos en el carrito</p>}
        <ul>
          {items.map((product) => (
            <CartItem key={product.idProd} product={product}/>
          ))}
        </ul>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-200">
            <p className="mb-3 text-lg font-bold dark:text-black">Resumen de su pedido</p>
            <Separator className="py-4 dark:bg-slate-100"/>
            <div className="flex justify-between gap-5 my-4 dark:text-black">
              <p className="font-semibold">Orden Total</p>
              <p>{transformPriceData(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <RealPaypalButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
