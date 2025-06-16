import type { FinishPay } from "@/types/allTypes";

export function transformOrderData(data: any): FinishPay {
  const order = data.order

  return {
    data: {
      id: order.id,
      captureData: {
        payer: {
          email: order.captureData.payer.email_address,
          name: {
            firstName: order.captureData.payer.name.given_name,
            lastName: order.captureData.payer.name.surname,
          },
        },
      },
      items: order.items,
      total: order.totalAmount,
    },
  };
}