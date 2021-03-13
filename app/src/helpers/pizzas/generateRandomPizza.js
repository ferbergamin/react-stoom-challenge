import fakeApi from 'services/fakeApi'

const generateRandomPizza = () => {
  const DataDoughs = fakeApi.get('PizzaDoughs')
  const DataSizes = fakeApi.get('PizzaSizes')
  const DataFillings = fakeApi.get('PizzaFillings')

  const Dough = fakeApi.find(DataDoughs, getRandomNumber(DataDoughs.length) + 1)
  const Size = fakeApi.find(DataSizes, getRandomNumber(DataSizes.length) + 1)
  const Filling = fakeApi.find(
    DataFillings,
    getRandomNumber(DataFillings.length) + 1,
  )

  const ammount = Dough.price + Size.price + Filling.price

  const points = getRandomNumber(15)

  return {
    PizzaDough: Dough,
    PizzaSize: Size,
    PizzaFilling: Filling,
    ammount,
    points: points > 6 ? points : 7,
  }
}

const getRandomNumber = (range) => {
  return Math.floor(Math.random() * range)
}

export default generateRandomPizza
