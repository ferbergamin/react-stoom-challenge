import React, { useEffect } from 'react'

import { Container, Button } from 'react-bootstrap'
import { DoughStepper, Stepper } from 'components'
import { useForm } from 'react-hook-form'

// import useToast from 'hooks/useToast'
// import useBackend from 'hooks/useBackend'
import useStepper from 'hooks/useStepper'
import schema from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

import useTheme from 'hooks/useTheme'
import styles from './styles'
import mountNextDisabled from 'helpers/home/mountNextDisabled'

const Home = () => {
  const style = useTheme(styles)

  const {
    setActiveStep,
    activeStep,
    nextDisabled,
    setNextDisabled,
  } = useStepper()

  const { register, control, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pizzaDoughId: '',
      pizzaSizeId: '',
      pizzaFillingId: '',
    },
  })

  useEffect(() => {
    setNextDisabled(mountNextDisabled(activeStep, watch))
    //eslint-disable-next-line
  }, [activeStep, watch()])

  const submit = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Container fluid="xl" style={style.container}>
      <Stepper>
        <form onSubmit={handleSubmit(submit)}>
          {activeStep === 1 && (
            <DoughStepper control={control} register={register} />
          )}
          {activeStep < 3 ? (
            <Button variant="primary" onClick={submit} disabled={nextDisabled}>
              Próximo
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          )}
        </form>
      </Stepper>
    </Container>
  )
}

export default Home
