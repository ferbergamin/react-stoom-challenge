import * as yup from 'yup'

let schema = yup.object().shape({
  pizzaDoughId: yup.string(),
  pizzaSizeId: yup.string(),
  pizzaFillingId: yup.string(),
  recommendedDayPizzaId: yup.boolean(),
})

export default schema
