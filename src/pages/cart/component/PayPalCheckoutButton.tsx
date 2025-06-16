//este componenet es para tener de prueba usando solo el boton original de paypal 

import { useCart } from "@/hooks/useCart";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckoutButton = () => {
  const { items } = useCart();

  const createOrder = async () => {
    try {
      const response = await fetch("/api/payments/create-paypal-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!data.id) throw new Error("No se pudo obtener el ID de la orden");

      return data.id;
      
    } catch (error) {
      console.error("Error creando orden PayPal:", error);
      throw error;
    }
  };

  const onApprove = async (data: any) => {
    try {
      const captureRes = await fetch("/api/payments/capture-paypal-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: data.orderID }),
      });

      const captureData = await captureRes.json();
      console.log("Orden capturada:", captureData);
    } catch (error) {
      console.error("Error al capturar:", error);
    }
  };

  return (
    <div>
      <PayPalButtons
        style={{
          layout: "vertical",
          label: "pay",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </div>
  );
};

export default PayPalCheckoutButton;
