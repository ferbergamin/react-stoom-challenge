import React from 'react'
import { MainLayout } from 'layouts'

import useBackend from 'hooks/useBackend'

import BackendProvider from 'providers/BackendProvider'

const DefaultComponent = () => {
  const data = useBackend()
  console.log(data)
  return (
    <div
      style={{
        height: '100%',
      }}
    ></div>
  )
}

function App() {
  return <MainLayout provider={BackendProvider} component={DefaultComponent} />
}

export default App
