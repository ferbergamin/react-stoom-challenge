import React from 'react'
import { Row } from 'react-bootstrap'
import CardStepper from './CardStepper'

import useTheme from 'hooks/useTheme'
import styles from './styles'
import useStepper from 'hooks/useStepper'

const Stepper = ({ children }) => {
  const style = useTheme(styles)
  const { activeStep, finalizedSteps } = useStepper()

  console.log(finalizedSteps)
  return (
    <div style={style.stepper}>
      <Row>
        <CardStepper
          style={style}
          step={1}
          active={activeStep === 1}
          concluded={finalizedSteps.includes(1)}
        >
          Escolha a massa
        </CardStepper>
        <CardStepper
          style={style}
          step={2}
          active={activeStep === 2}
          concluded={finalizedSteps.includes(2)}
        >
          Escolha o tamanho
        </CardStepper>
        <CardStepper
          step={3}
          style={style}
          active={activeStep === 3}
          concluded={finalizedSteps.includes(3)}
        >
          Escolha o sabor
        </CardStepper>
      </Row>
      {children}
    </div>
  )
}

export default Stepper
