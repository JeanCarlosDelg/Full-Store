import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaypalSuccess = () => {
  const [status, setStatus] = useState("Procesando pago...");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const urlBaseBackend = import.meta.env.VITE_BACKEND_URL;
  const { removeAll } = useCart();

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
          console.log("Pago completado:", data);
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
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">{status}</h2>
    </div>
  );
};

export default PaypalSuccess;
