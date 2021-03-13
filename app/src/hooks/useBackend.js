import { useContext } from 'react'

import BackendContext from 'contexts/BackendContext'

const useBackend = () => {
  const context = useContext(BackendContext)

  if (context === undefined) {
    throw Error('useBackend possui contexto inválido')
  }

  const {
    stateBackend,
    dispatchBackend,
    backendLoaded,
    setBackendLoaded,
  } = context

  return {
    stateBackend,
    dispatchBackend,
    backendLoaded,
    setBackendLoaded,
  }
}

export default useBackend
