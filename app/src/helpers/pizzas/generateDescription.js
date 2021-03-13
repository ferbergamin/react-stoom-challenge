const generateDescription = (order) => {
  return `Uma pizza {order.PizzaSize.name} bem caprichada, com a deliciosa massa ${order.PizzaDough.name} e recheada com ${order.PizzaFilling.name}`
}

export default generateDescription
