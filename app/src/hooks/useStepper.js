import { useContext } from 'react'

import StepperContext from 'contexts/StepperContext'

const useStepper = () => {
  const context = useContext(StepperContext)

  if (context === undefined) {
    throw new Error('useStepper possui contexto inválido')
  }

  const {
    data,
    setData,
    stepName,
    loadData,
    setToStep,
    activeStep,
    finalizedSteps,
    finalizeStep,
    nextDisabled,
    setActiveStep,
    setNextDisabled,
  } = context

  return {
    data,
    setData,
    stepName,
    loadData,
    setToStep,
    activeStep,
    finalizedSteps,
    finalizeStep,
    nextDisabled,
    setActiveStep,
    setNextDisabled,
  }
}

export default useStepper
