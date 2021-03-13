import React from 'react'

import { GlobalProvider } from 'components'
import Routes from 'Routes'

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  )
}

export default App
