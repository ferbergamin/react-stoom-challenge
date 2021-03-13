import pizzaDoughs from './pizzaDoughs'
import pizzaFillings from './pizzaFillings'
import pizzaSizes from './pizzaSizes'

const tableKeys = [
  {
    tableName: 'PizzaDoughs',
    attributtes: ['id', 'name', 'description', 'price'],
    defaultData: pizzaDoughs,
  },
  {
    tableName: 'PizzaFillings',
    attributtes: ['id', 'name', 'description', 'price'],
    defaultData: pizzaFillings,
  },
  {
    tableName: 'PizzaSizes',
    attributtes: ['id', 'name', 'description', 'price'],
    defaultData: pizzaSizes,
  },
  {
    tableName: 'Orders',
    attributtes: [
      'id',
      'PizzaDough',
      'PizzaFilling',
      'PizzaSize',
      'ammount',
      'points',
      'finalized',
    ],
  },
  {
    tableName: 'RecommendedDayPizzas',
    attributtes: [
      'id',
      'PizzaDough',
      'PizzaFilling',
      'pizzaSize',
      'ammount',
      'points',
    ],
  },
]

export default tableKeys
