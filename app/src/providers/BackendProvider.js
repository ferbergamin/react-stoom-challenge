import React, { useEffect } from 'react'

import { pizza } from 'constants/index'
import { backend } from 'helpers'
import BackendContext from 'contexts/BackendContext'

const BackendProvider = ({ children }) => {
  useEffect(() => createBackend())

  const createBackend = () => {
    pizza.tableKeys.forEach((tableKey) => {
      backend.createTable(tableKey.tableName)
    })
  }

  const mountDatabase = () => {
    const database = {}
    pizza.tableKeys.forEach((tableKey) => {
      database[tableKey.tableName] = {
        data: backend.getTable(tableKey.tableName),
        attributes: tableKey.attributtes,
      }
    })
    return database
  }

  return (
    <BackendContext.Provider
      value={{
        createBackend,
        mountDatabase,
      }}
    >
      {children}
    </BackendContext.Provider>
  )
}

export default BackendProvider
