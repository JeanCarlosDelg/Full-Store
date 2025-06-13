// import { 
//   PayPalButtons, 
//   PayPalButtonsComponentProps, 
//   PayPalScriptProvider, 
//   ReactPayPalScriptOptions 
// } from "@paypal/react-paypal-js"

// interface OrderData {
//     id: string;
//     details?: Array<{
//       issue: string;
//       description: string;
//     }>;
//     debug_id?: string;
// }

// const PayPalButtonComponent = () => {
//   const initialOptions: ReactPayPalScriptOptions = {
//     clientId: "AaQ2ekLpMNJ_cEWYO0nTOuovEH_bRESIAUzfIC3bC0ysHkOpDIbnjV-eXjICh22qIeSCzZnlS7QyiVL-",
//     currency: "USD",
//     intent: "capture"
//   }

//   const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
//         try {
//             const response = await fetch("/my-server/create-paypal-order", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     cart: [{ id: "YOUR_PRODUCT_ID", quantity: "YOUR_PRODUCT_QUANTITY" }],
//                 }),
//             });

//           const orderData: OrderData = await response.json();

//           if (!orderData.id) {
//               const errorDetail = orderData?.details?[0];
//               const errorMessage = errorDetail
//                   ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
//                   : "Unexpected error occurred, please try again.";

//               throw new Error(errorMessage);
//           }

//           return orderData.id;

//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     };
// }

// export default PayPalButtonComponent