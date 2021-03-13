import * as yup from 'yup'

let schema = yup.object().shape({
  pizzaDoughId: yup.string().required(),
  pizzaSizeId: yup.string().required(),
  pizzaFillingId: yup.string().required(),
})

export default schema
