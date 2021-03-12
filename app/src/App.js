import React from 'react'
import { MainLayout } from 'layouts'
import { Home } from 'views'

import BackendProvider from 'providers/BackendProvider'
import ToastProvider from 'providers/ToastProvider'
import StepperProvider from 'providers/StepperProvider'

function App() {
  return (
    <ToastProvider>
      <StepperProvider>
        <MainLayout provider={BackendProvider} component={Home} />
      </StepperProvider>
    </ToastProvider>
  )
}

export default App
