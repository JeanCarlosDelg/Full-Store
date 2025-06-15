import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { ProductsType } from "@/types/allTypes";

const PayPalButtonComponent = () => {
  const { items: cartItems, removeAll } = useCart();
  const urlBaseBackend = import.meta.env.VITE_BACKEND_URL;
  const { paymentId } = useParams()

  // ✅ Crear orden: guardamos los productos en localStorage
  const handleCreateOrder = async () => {
    try {
      localStorage.setItem("paypalItems", JSON.stringify(cartItems));

      const response = await fetch(`${urlBaseBackend}/api/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();

      if (data.approveUrl) {
        window.location.href = data.approveUrl;
      } else {
        alert("No se pudo crear la orden de PayPal");
      }
    } catch (error) {
      console.error("Error creando orden PayPal:", error);
    }
  };

  // ✅ Captura orden: recuperamos los productos directamente desde localStorage
  useEffect(() => {
    const captureOrder = async () => {
      if (!paymentId) return;

      try {
        const saved = localStorage.getItem("paypalItems");
        const items: ProductsType[] = saved ? JSON.parse(saved) : [];

        const totalAmount = items.reduce((acc, item) => {
          const quantity = item.quantity ?? 1;
          return acc + item.price * quantity;
        }, 0);

        const response = await fetch(`${urlBaseBackend}/api/payments/capture-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId, items, totalAmount }),
        });

        const data = await response.json();

        if (data.ok) {
          alert("✅ Orden capturada y guardada en Strapi");
          console.log("Orden completa:", data.order);
        } else {
          console.warn("⚠️ Orden ya capturada o sin cambios");
        }
      } catch (error) {
        console.error("❌ Error al capturar orden PayPal:", error);
        alert("Error al capturar orden");
      }
    };

    captureOrder();
  }, [paymentId, urlBaseBackend, removeAll]);

  return <Button onClick={handleCreateOrder}>Pagar con Paypal</Button>;
};

export default PayPalButtonComponent