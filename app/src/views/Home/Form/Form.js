import React, { useEffect } from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import {
  DoughStepper,
  FillingStepper,
  OrderFinalized,
  SizeStepper,
} from 'components'

import useStepper from 'hooks/useStepper'
import useOrder from 'hooks/useOrderProvider'
import useRecommendation from 'hooks/useRecommendations'
import useBackend from 'hooks/useBackend'

import schema from './schema'
import { routes } from 'Routes'

export const Form = () => {
  const { data, setData, updateOrder, finalizeOrder } = useOrder()

  const { dispatchBackend } = useBackend()
  const {
    setToStep,
    activeStep,
    nextDisabled,
    stepName,
    setNextDisabled,
    finalizeStep,
  } = useStepper()
  const stepNameId = stepName[0]?.toLowerCase() + stepName?.slice(1, -1) + 'Id'

  const {
    data: recommendation,
    handleRecommendation,
    recommendationChecked,
  } = useRecommendation()

  const { control, handleSubmit, watch, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pizzaDoughId: data?.PizzaDough?.id?.toString() || '',
      pizzaSizeId: data?.PizzaSize?.id?.toString() || '',
      pizzaFillingId: data?.PizzaFilling?.id?.toString() || '',
      recommendedDayPizzaId: 'false',
    },
  })

  useEffect(() => {
    if (activeStep < 4) {
      const values = watch()
      const valueIsNull = () =>
        !Boolean(
          watch()[stepName[0].toLowerCase() + stepName.slice(1, -1) + 'Id'],
        )

      if (valueIsNull() || Object.keys(values) > 1) {
        for (let key in values) {
          let dataKey =
            key.charAt(0).toUpperCase() + key.slice(1, key.length - 2)
          if (data) {
            setValue(key, data[dataKey]?.id?.toString())
          }
        }
      }

      setNextDisabled(valueIsNull())
    }
    //eslint-disable-next-line
  }, [activeStep, data, watch(stepNameId)])

  const passStep = () => {
    var values = getValues()
    updateOrder(stepName, values[Object.keys(values)[0]])
    finalizeStep(activeStep)
    setToStep(activeStep + 1)
  }

  const submit = () => {
    var values = getValues()
    updateOrder(stepName, values[Object.keys(values)[0]], '', finalizeOrder)
    finalizeStep(activeStep)
    setToStep(activeStep + 1)
  }

  const submitRecommendation = () => {
    dispatchBackend({
      type: 'DELETE',
      tableName: 'Orders',
      payload: { id: data.id },
    })
    const order = handleRecommendation(recommendation)
    setData(order)
    finalizeStep([1, 2, 3])
    setToStep(4)
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        {activeStep === 1 && (
          <DoughStepper control={control} defaultValue={data?.PizzaDough?.id} />
        )}
        {activeStep === 2 && (
          <SizeStepper
            control={control}
            defaultValue={data?.PizzaSize?.id}
            pizzaDoughId={data?.PizzaDough.id}
          />
        )}
        {activeStep === 3 && (
          <FillingStepper
            control={control}
            defaultValue={data?.PizzaFilling?.id}
            pizzaDoughId={data?.PizzaDough?.id}
            pizzaSizeId={data?.PizzaSize?.id}
          />
        )}

        {activeStep === 3 && !recommendationChecked && (
          <Button disabled={nextDisabled} variant="primary" type="submit">
            Finalizar
          </Button>
        )}
      </form>
      {activeStep === 4 && (
        <OrderFinalized>
          <Link to={routes.orders} className="btn btn-primary">
            Ver meus pedidos
          </Link>
        </OrderFinalized>
      )}

      {activeStep < 4 && (
        <div>
          {recommendationChecked ? (
            <Button variant="primary" onClick={submitRecommendation}>
              Finalizar
            </Button>
          ) : (
            activeStep < 3 && (
              <Button
                variant="primary"
                onClick={passStep}
                disabled={nextDisabled}
              >
                Próximo
              </Button>
            )
          )}
        </div>
      )}
    </>
  )
}

export default Form
