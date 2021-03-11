const tableKeys = [
  {
    tableName: 'PizzaDoughs',
    attributtes: ['id', 'name', 'description', 'price'],
  },
  {
    tableName: 'PizzaFillings',
    attributtes: ['id', 'name', 'description', 'price'],
  },
  {
    tableName: 'PizzaSizes',
    attributtes: ['id', 'name', 'description', 'price'],
  },
  {
    tableName: 'Orders',
    attributtes: [
      'PizzaDough',
      'PizzaFilling',
      'pizzaSize',
      'ammount',
      'points',
    ],
  },
  {
    tableName: 'RecommendedDayPizzas',
    attributtes: [
      'PizzaDough',
      'PizzaFilling',
      'pizzaSize',
      'ammount',
      'points',
    ],
  },
]

export default tableKeys
