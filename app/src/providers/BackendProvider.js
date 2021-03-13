import React, { useEffect, useReducer, useState } from 'react'

import { pizza } from 'constants/index'
import { backend } from 'helpers'

import backendReducer from 'reducers/backendReducer'
import BackendContext from 'contexts/BackendContext'

const BackendProvider = ({ children }) => {
  const [backendLoaded, setBackendLoaded] = useState(false)

  useEffect(() => {
    createBackend()
    if (!backendLoaded) setBackendLoaded(true)
  }, [backendLoaded])

  const createBackend = () => {
    pizza.tableKeys.forEach((tableKey) => {
      backend.createTable(tableKey.tableName, tableKey.defaultData)
    })
  }

  const mountDatabase = () => {
    const database = {}
    for (let key in pizza.tableKeys) {
      const { tableName, attributtes } = pizza.tableKeys[key]
      database[tableName] = {
        data: backend.getTable(tableName) || [],
        attributtes: attributtes,
      }
    }
    return database
  }

  const [stateBackend, dispatchBackend] = useReducer(
    backendReducer,
    mountDatabase(),
  )

  return (
    <BackendContext.Provider
      value={{
        createBackend,
        stateBackend,
        dispatchBackend,
        backendLoaded,
        setBackendLoaded,
      }}
    >
      {children}
    </BackendContext.Provider>
  )
}

export default BackendProvider
