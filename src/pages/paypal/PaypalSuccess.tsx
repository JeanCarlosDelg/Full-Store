import { useCart } from "@/hooks/useCart";
import type { FinishPay } from "@/types/allTypes";
import { transformOrderData } from "@/utils/transformOrderData";
import { Separator } from "@radix-ui/react-separator"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

const PaypalSuccess = () => {
  const [status, setStatus] = useState("Procesando pago...");
  const [orderData, setOrderData] = useState<FinishPay | null>();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const urlBaseBackend = import.meta.env.VITE_BACKEND_URL;
  const { removeAll } = useCart();
  console.log(orderData);

  const totalPrice = orderData?.data.items.reduce((total, item) => {
    const quantity = item.quantity ?? 1;
    return total + item.price * quantity;
  }, 0);

  const formattedTotal = (totalPrice ?? 0).toFixed(2).padStart(8, " ");

  useEffect(() => {
    if (token) {
      fetch(`${urlBaseBackend}/api/payments/capture-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: token }),
      })
        .then((res) => res.json())
        .then((data) => {
          setStatus("Pago exitoso ✅");
          localStorage.removeItem("paypalItems");
          removeAll();
          console.log(data);
          const parseData: FinishPay = transformOrderData(data);
          setOrderData(parseData);
        })
        .catch((error) => {
          console.error("Error al capturar pago:", error);
          setStatus("Error al capturar el pago ❌");
        });
    } else {
      setStatus("No se encontró token de pago en la URL.");
      return;
    }
  }, [token]);

  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center">{status}</h2>
      {status === "Pago exitoso ✅" && (
        <>
          <h3 className="flex justify-center gap-3 text-2xl mt-6">
            <span className="font-bold text-red-500">Nombre:</span>
            <span className="uppercase">
              {orderData?.data.captureData.payer.name.firstName}{" "}
              {orderData?.data.captureData.payer.name.lastName}
            </span>
          </h3>
          <p className="flex justify-center gap-3 text-xl">
            <span className="font-bold text-red-500">Email:</span>
            {orderData?.data.captureData.payer.email}
          </p>

          <div className="flex gap-5 justify-between mt-6">
            <div>
              <p className="font-bold text-xl text-center text-red-500">
                Productos
              </p>
              <ul className="text-left">
                {orderData?.data.items.map((product) => (
                  <li key={product.idProd}>{product.nameProd}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between gap-10">
              <div>
                <p className="font-bold text-xl text-center text-red-500">
                  Cantidad
                </p>
                <ul>
                  {orderData?.data.items.map((product) => (
                    <li className="text-center" key={product.idProd}>
                      {product.quantity ?? 1}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-bold  text-xl text-center text-red-500">
                  Precio
                </p>
                <ul className="text-right font-mono">
                  {orderData?.data.items.map((product) => {
                    const quantity = product.quantity ?? 1;
                    const total = product.price * quantity;
                    const formatted = total.toFixed(2);
                    const padded = formatted.padStart(8, " ");
                    return (
                      <li key={product.idProd} className="flex justify-between">
                        <span className="inline-block w-4 text-left">$</span>
                        <span className="w-20">{padded}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <Separator className="py-[1px] bg-red-500 my-4" />

          <div className="flex justify-between">
            <p className="font-bold text-2xl text-red-500">TOTAL:</p>
            <p className="flex justify-between font-mono text-right">
              <span className="inline-block w-4 text-left">$</span>
              <span className="w-20">{formattedTotal}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PaypalSuccess;
