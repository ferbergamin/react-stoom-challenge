import React, { useEffect, useReducer } from 'react'

import { pizza } from 'constants/index'
import { backend } from 'helpers'

import useBackendReducer from 'reducers/backendReducer'
import BackendContext from 'contexts/BackendContext'

const BackendProvider = ({ children }) => {
  useEffect(() => createBackend())

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
    useBackendReducer,
    mountDatabase(),
  )

  return (
    <BackendContext.Provider
      value={{
        createBackend,
        stateBackend,
        dispatchBackend,
      }}
    >
      {children}
    </BackendContext.Provider>
  )
}

export default BackendProvider
