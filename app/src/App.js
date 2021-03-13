import React from 'react'
import { MainLayout } from 'layouts'

import Home from 'views/Home'

import BackendProvider from 'providers/BackendProvider'
import ToastProvider from 'providers/ToastProvider'
import StepperProvider from 'providers/StepperProvider'
import OrderProvider from 'providers/OrderProvider'
import RecommendationProvider from 'providers/RecommendationProvider'

function App() {
  return (
    <ToastProvider>
      <StepperProvider>
        <BackendProvider>
          <RecommendationProvider>
            <MainLayout provider={OrderProvider} component={Home} />
          </RecommendationProvider>
        </BackendProvider>
      </StepperProvider>
    </ToastProvider>
  )
}

export default App
