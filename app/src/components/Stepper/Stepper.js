import React from 'react'
import { Row } from 'react-bootstrap'
import CardStepper from './CardStepper'

import useTheme from 'hooks/useTheme'
import styles from './styles'
import useStepper from 'hooks/useStepper'

const Stepper = ({ children }) => {
  const style = useTheme(styles)
  const { activeStep } = useStepper()

  return (
    <div style={style.stepper}>
      <Row>
        <CardStepper
          style={style}
          active={activeStep === 1}
          concluded={activeStep > 1}
        >
          Escolha a massa
        </CardStepper>
        <CardStepper
          style={style}
          active={activeStep === 2}
          concluded={activeStep > 2}
        >
          Escolha o tamanho
        </CardStepper>
        <CardStepper
          style={style}
          active={activeStep === 3}
          concluded={activeStep > 3}
        >
          Escolha o sabor
        </CardStepper>
      </Row>
      {children}
    </div>
  )
}

export default Stepper
