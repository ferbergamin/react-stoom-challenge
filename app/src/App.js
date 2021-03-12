import React, { useEffect } from 'react'
import { MainLayout } from 'layouts'

import useBackend from 'hooks/useBackend'

import BackendProvider from 'providers/BackendProvider'

const DefaultComponent = () => {
  const data = useBackend()
  useEffect(() => {
    data.dispatchBackend({
      type: 'FIND_BY',
      tableName: 'Orders',
      payload: { id: 1 },
    })
  })

  return (
    <div
      style={{
        minHeight: '82vh',
      }}
    ></div>
  )
}

function App() {
  return <MainLayout provider={BackendProvider} component={DefaultComponent} />
}

export default App
