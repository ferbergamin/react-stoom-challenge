const useBackendReducer = (state, action) => {
  const { type, tableName, payload } = action
  switch (type) {
    case 'CREATE':
      return state
    default:
      return state
  }
}

export default useBackendReducer
