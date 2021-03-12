import { useContext } from 'react'

import BackendContext from 'contexts/BackendContext'

const useBackend = () => {
  const context = useContext(BackendContext)

  if (context === undefined) {
    throw Error('useBackend possui contexto inválido')
  }

  const { stateBackend, dispatchBackend } = context
  return {
    stateBackend,
    dispatchBackend,
  }
}

export default useBackend
