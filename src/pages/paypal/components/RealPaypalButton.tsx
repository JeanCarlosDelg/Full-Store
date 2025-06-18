import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { transformOrderData } from "@/utils/transformOrderData";
import type { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData } from "@paypal/paypal-js";

const RealPaypalButton = () => {
  const navigate = useNavigate();
  const { items, removeAll } = useCart();

  const total = items.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? 1),
    0
  );

  const createOrder = (_: CreateOrderData, actions:CreateOrderActions ) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: total.toFixed(2),
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: total.toFixed(2),
                  },
                },
              },
              items: items.map((item) => ({
                name: item.nameProd,
                quantity: item.quantity?.toString() ?? "1",
                unit_amount: {
                  currency_code: "USD",
                  value: item.price.toFixed(2),
                },
              })),
            },
          ],
        });
      }

      const onApprove = async (_: OnApproveData, actions: OnApproveActions) => {
        const details = await actions.order?.capture();

        if (!details) return;

        // Creamos un mock compatible con transformOrderData
        const mockData = {
          order: {
            id: Date.now(), // Genera un ID único temporal
            captureData: {
              payer: {
                email_address:
                  details.payer?.email_address ?? "sin-email@paypal.com",
                name: {
                  given_name: details.payer?.name?.given_name ?? "Desconocido",
                  surname: details.payer?.name?.surname ?? "",
                },
              },
            },
            items: items,
            totalAmount: total,
          },
        };

        const transformed = transformOrderData(mockData);

        // Guardar el resultado transformado
        localStorage.setItem("mockPayPalSuccess", JSON.stringify(transformed));

        // Redirigir
        navigate("/success");

        removeAll();
      }

      const onCancel = () => {
        console.log("🚫 Pago cancelado, redirigiendo a /cancel");
        navigate("/cancel"); // ✅ redirección si cancelan el pago
      }

      const onError = (err: any) => {
        console.error("❌ Error con PayPal:", err);
        alert("Error con el pago");
      }

  return (
    <>
    <button onClick={() => navigate("/cancel")}>Test Cancel</button>
    <PayPalButtons className="w-full"
      createOrder={createOrder}
      onApprove={onApprove}
      onCancel={onCancel}
      onError={onError}
    />
    </>
  );
};

export default RealPaypalButton;
