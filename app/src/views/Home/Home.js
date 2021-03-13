import React, { useEffect } from 'react'

import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import {
  DoughStepper,
  FillingStepper,
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
    if (activeStep < 4) {
      const obj = watch()[Object.keys(watch())[0]]
      const condition = ['', 0, null, undefined].includes(obj)

      setNextDisabled(condition)
    }
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
            {activeStep === 3 && (
              <FillingStepper
                control={control}
                register={register}
                defaultValue={defaultValues.pizzaSizeId}
              />
            )}
            {activeStep === 4 && (
              <div>
                <Card style={style.card} text="light" size={25}>
                  <Card.Title>
                    Sua pizza foi encaminhada para nosso cozinha
                  </Card.Title>
                  <Card.Body>
                    <Row>
                      <Col>Massa:</Col>
                      <Col>{data?.PizzaDough?.name || '-'}</Col>
                    </Row>
                    <Row>
                      <Col>Tamanho:</Col>
                      <Col>{data?.PizzaSize?.name || '-'}</Col>
                    </Row>
                    <Row>
                      <Col>Recheio:</Col>
                      <Col>{data?.PizzaFilling?.name || '-'}</Col>
                    </Row>
                    <Row>
                      <Col>Preço:</Col>
                      <Col>R$ {data?.ammount?.toFixed(2) || '-'}</Col>
                    </Row>
                    <Row>
                      <Col>Pontos:</Col>
                      <Col>{data?.points || '-'}</Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
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
              <Button disabled={nextDisabled} variant="primary" type="submit">
                {activeStep === 3 ? 'Salvar' : 'Ver todos os pedidos'}
              </Button>
            )}
          </form>
        </LoadingComponent>
      </Stepper>
    </Container>
  )
}

export default Home
