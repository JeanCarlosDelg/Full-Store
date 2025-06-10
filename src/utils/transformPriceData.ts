export function transformPriceData (price: number) {
  const formatPrice = new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  })

  const finalPrice = formatPrice.format(price)

  return finalPrice
}