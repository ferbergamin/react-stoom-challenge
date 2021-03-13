import React, { useEffect } from 'react'

import { Container } from 'react-bootstrap'

import { Stepper } from 'components'

import useStepper from 'hooks/useStepper'
import useTheme from 'hooks/useTheme'
import useOrder from 'hooks/useOrderProvider'
import { Form } from './Form'

import styles from './styles'

const Home = () => {
  const style = useTheme(styles)

  const { activeStep } = useStepper()

  const { data, loadData } = useOrder()

  useEffect(() => {
    if (!data) {
      loadData()
    }

    //eslint-disable-next-line
  }, [activeStep, data])

  return (
    <Container fluid="xl" style={style.container}>
      <Stepper>
        <Form />
      </Stepper>
    </Container>
  )
}

export default Home
