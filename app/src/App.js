import React from 'react'
import { MainLayout } from 'layouts'

import Home from 'views/Home'

import BackendProvider from 'providers/BackendProvider'
import ToastProvider from 'providers/ToastProvider'
import StepperProvider from 'providers/StepperProvider'
import OrderProvider from 'providers/OrderProvider'

function App() {
  return (
    <ToastProvider>
      <StepperProvider>
        <OrderProvider>
          <MainLayout provider={BackendProvider} component={Home} />
        </OrderProvider>
      </StepperProvider>
    </ToastProvider>
  )
}

export default App
