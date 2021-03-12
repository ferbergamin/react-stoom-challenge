import fakeApi from 'services/fakeApi'

const backendReducer = (state, action) => {
  const { type, tableName, payload, dispatchToast } = action
  const table = state[tableName]
  const newData = state

  switch (type) {
    case 'POST':
      try {
        const postResponse = fakeApi.post(tableName, table, payload)
        newData[tableName] = postResponse
        dispatchToast({
          type: 'SUCCESS',
          message: `${tableName} criado com sucesso`,
        })

        return newData
      } catch (err) {
        dispatchToast({ type: 'ERROR', message: err.message })
        return state
      }
    case 'UPDATE':
      try {
        const updateResponse = fakeApi.update(tableName, table, payload)
        newData[tableName] = updateResponse
        dispatchToast({
          type: 'SUCCESS',
          message: `${tableName} atualizado com sucesso`,
        })
        return newData
      } catch (err) {
        dispatchToast({ type: 'ERROR', message: err.message })
        return state
      }
    default:
      return state
  }
}

export default backendReducer
