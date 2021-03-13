import translateName from 'constants/tables/translateName'
import fakeApi from 'services/fakeApi'

const backendReducer = (state, action) => {
  const { type, tableName, payload, dispatchToast } = action
  const humanTableName = translateName(tableName)

  const table = state[tableName]
  const newData = state

  switch (type) {
    case 'POST':
      try {
        const postResponse = fakeApi.post(tableName, table, payload)
        newData[tableName] = postResponse
        if (dispatchToast) {
          dispatchToast({
            type: 'SUCCESS',
            message: `${humanTableName} criado com sucesso`,
          })
        }
        return newData
      } catch (err) {
        if (dispatchToast) {
          dispatchToast({ type: 'ERROR', message: err.message })
        }
        return state
      }
    case 'UPDATE':
      try {
        const updateResponse = fakeApi.update(tableName, table, payload)
        newData[tableName] = updateResponse
        if (dispatchToast) {
          dispatchToast({
            type: 'SUCCESS',
            message: `${humanTableName} atualizado com sucesso`,
          })
        }
        return newData
      } catch (err) {
        if (dispatchToast) {
          dispatchToast({ type: 'ERROR', message: err.message })
        }
        return state
      }
    case 'DELETE':
      try {
        const removeResponse = fakeApi.remove(tableName, table, payload.id)
        newData[tableName] = removeResponse
        if (dispatchToast) {
          dispatchToast({
            type: 'SUCCESS',
            message: `${humanTableName} removido com sucesso`,
          })
        }
        return newData
      } catch (err) {
        if (dispatchToast) {
          dispatchToast({ type: 'ERROR', message: err.message })
        }
        return state
      }
    default:
      return state
  }
}

export default backendReducer
