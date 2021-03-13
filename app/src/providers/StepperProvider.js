import React, { useState } from 'react'

import StepperContext from 'contexts/StepperContext'
import { Toast } from 'components'

const StepperProvider = ({ children }) => {
  const [data, setData] = useState()
  const [activeStep, setActiveStep] = useState(1)
  const [nextDisabled, setNextDisabled] = useState(false)

  return (
    <StepperContext.Provider
      value={{
        data,
        setData,
        activeStep,
        setActiveStep,
        nextDisabled,
        setNextDisabled,
      }}
    >
      {children}
      <Toast />
    </StepperContext.Provider>
  )
}

export default StepperProvider
