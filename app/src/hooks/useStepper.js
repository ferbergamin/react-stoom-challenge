import { useContext } from 'react'

import StepperContext from 'contexts/StepperContext'

const useStepper = () => {
  const context = useContext(StepperContext)

  if (context === undefined) {
    throw new Error('useStepper possui contexto inválido')
  }

  return {
    data: context.data,
    setData: context.setData,
    loadData: context.loadData,
    activeStep: context.activeStep,
    setActiveStep: context.setActiveStep,
    nextDisabled: context.nextDisabled,
    setNextDisabled: context.setNextDisabled,
  }
}

export default useStepper
