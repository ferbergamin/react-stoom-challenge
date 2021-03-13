import React, { useState } from 'react'

import StepperContext from 'contexts/StepperContext'
import { Toast } from 'components'

const StepperProvider = ({ children }) => {
  const [data, setData] = useState()
  const [activeStep, setActiveStep] = useState(1)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [stepName, setStepName] = useState('PizzaDoughs')

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

  return (
    <StepperContext.Provider
      value={{
        data,
        setData,
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
