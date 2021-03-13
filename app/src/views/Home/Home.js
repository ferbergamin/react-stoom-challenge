import React, { useEffect } from 'react'

import { Container, Button } from 'react-bootstrap'
import {
  DoughStepper,
  LoadingComponent,
  SizeStepper,
  Stepper,
} from 'components'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useStepper from 'hooks/useStepper'
import useTheme from 'hooks/useTheme'
import useOrder from 'hooks/useOrderProvider'

import schema from './schema'
import styles from './styles'

const Home = () => {
  const style = useTheme(styles)

  const {
    setToStep,
    activeStep,
    nextDisabled,
    setNextDisabled,
    stepName,
  } = useStepper()

  const { data, updateOrder, orderLoaded, loadData } = useOrder()

  const defaultValues = {
    pizzaDoughId: data?.PizzaDough?.id?.toString() || '',
    pizzaSizeId: data?.PizzaSize?.id?.toString() || '',
    pizzaFillingId: data?.PizzaFilling?.id?.toString() || '',
  }

  const { register, control, handleSubmit, watch, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  })

  useEffect(() => {
    if (!data) {
      loadData()
    }

    const condition = ['', 0, null, undefined].includes(
      watch()[Object.keys(watch())[0]],
    )

    setNextDisabled(condition)
    //eslint-disable-next-line
  }, [activeStep, watch()])

  const submit = () => {
    var values = getValues()
    updateOrder(stepName, values[Object.keys(values)[0]])
    setToStep(activeStep + 1)
  }

  return (
    <Container fluid="xl" style={style.container}>
      <Stepper>
        <LoadingComponent loading={!orderLoaded || data === undefined}>
          <form onSubmit={handleSubmit(submit)}>
            {activeStep === 1 && (
              <DoughStepper
                control={control}
                register={register}
                defaultValue={defaultValues.pizzaDoughId}
              />
            )}
            {activeStep === 2 && (
              <SizeStepper
                control={control}
                register={register}
                defaultValue={defaultValues.pizzaSizeId}
              />
            )}
            {activeStep < 3 ? (
              <Button
                variant="primary"
                onClick={submit}
                disabled={nextDisabled}
              >
                Próximo
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Salvar
              </Button>
            )}
          </form>
        </LoadingComponent>
      </Stepper>
    </Container>
  )
}

export default Home
