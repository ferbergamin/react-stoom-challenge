import React from 'react'

import { Container } from 'react-bootstrap'
import { Stepper } from 'components'

// import useToast from 'hooks/useToast'
// import useBackend from 'hooks/useBackend'
import useStepper from 'hooks/useStepper'

const Home = () => {
  const { setActiveStep, activeStep } = useStepper()

  const submit = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Container fluid lg>
      <Stepper>
        <div>formulário</div>
      </Stepper>
      <button onClick={submit}>testar</button>
    </Container>
  )
}

export default Home
