import React, { useState } from 'react'

import StepperContext from 'contexts/StepperContext'
import { Toast } from 'components'

const StepperProvider = ({ children }) => {
  const [data, setData] = useState()
  const [activeStep, setActiveStep] = useState(1)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [stepName, setStepName] = useState('PizzaDoughs')
  const [finalizedSteps, setFinalizedSteps] = useState([])

  const setToStep = (step) => {
    setActiveStep(step)
    switch (step) {
      case 1:
        return setStepName('PizzaDoughs')
      case 2:
        return setStepName('PizzaSizes')
      default:
        return setStepName('PizzaFillings')
    }
  }

  const finalizeStep = (step) => {
    if (typeof step === 'object') {
      setFinalizedSteps([...step])
    } else {
      setFinalizedSteps([...finalizedSteps, step])
    }
  }
  return (
    <StepperContext.Provider
      value={{
        data,
        setData,
        finalizedSteps,
        finalizeStep,
        activeStep,
        setActiveStep,
        nextDisabled,
        setNextDisabled,
        setToStep,
        stepName,
      }}
    >
      {children}
      <Toast />
    </StepperContext.Provider>
  )
}

export default StepperProvider
