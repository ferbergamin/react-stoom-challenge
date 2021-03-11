import { useContext } from 'react'

import BackendContext from 'contexts/BackendContext'
import backendReducer from 'reducers/backendReducer'

const useBackend = () => {
  const context = useContext(BackendContext)

  if (context === undefined) {
    throw Error('useBackend possui contexto inválido')
  }
  console.log(context.mountDatabase())
  const backendReducerHook = backendReducer(context.mountDatabase())
  const [state, dispatch] = backendReducerHook()

  return {
    state,
    dispatch,
  }
}

export default useBackend
