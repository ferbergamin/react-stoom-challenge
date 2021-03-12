import fakeApi from 'services/fakeApi'

const backendReducer = (state, action) => {
  const { type, tableName, payload } = action
  const table = state[tableName]
  const newData = state
  switch (type) {
    case 'POST':
      const postResponse = fakeApi.post(tableName, table, payload)
      newData[tableName] = postResponse
      return newData
    case 'UPDATE':
      const updateResponse = fakeApi.update(tableName, table, payload)
      newData[tableName] = updateResponse
      return newData
    default:
      return state
  }
}

export default backendReducer
