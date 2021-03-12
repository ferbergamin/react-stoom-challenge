const translateName = (modelName) => {
  return {
    Orders: 'Pedido',
    PizzaDoughs: 'Massa de pizza',
    PizzaFillings: 'Recheio de pizza',
    PizzaSizes: 'Tamanho de pizza',
    RecommendedDayPizzas: 'Recomendação do dia',
  }[modelName]
}

export default translateName
