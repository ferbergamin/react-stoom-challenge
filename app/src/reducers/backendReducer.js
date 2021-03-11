import { useReducer } from 'react'
import useBackendReducer from 'hooks/useBackendReducer'

const backendReducer = (context) => {
  return () => useReducer(context, useBackendReducer)
}

export default backendReducer
