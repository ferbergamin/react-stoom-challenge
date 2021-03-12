import React from 'react'
import { MainLayout } from 'layouts'

import BackendProvider from 'providers/BackendProvider'
import ToastProvider from 'providers/ToastProvider'

import useToast from 'hooks/useToast'
import useBackend from 'hooks/useBackend'
const DefaultComponent = () => {
  const { dispatchBackend } = useBackend()
  const { dispatchToast } = useToast()

  const submit = () => {
    dispatchBackend({
      type: 'POST',
      tableName: 'Orders',
      payload: {},
      dispatchToast: dispatchToast,
    })
  }

  return (
    <div
      style={{
        minHeight: '82vh',
      }}
    >
      <button onClick={submit}>testar</button>
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <MainLayout provider={BackendProvider} component={DefaultComponent} />
    </ToastProvider>
  )
}

export default App
