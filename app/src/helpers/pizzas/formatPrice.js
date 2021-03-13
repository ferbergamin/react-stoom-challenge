const formatPrice = (price, points = null) => {
  if (points) {
    return ` R$${(price - (price * points) / 100).toFixed(2)}`
  }
  return `R$${price.toFixed(2)}`
}

export default formatPrice
