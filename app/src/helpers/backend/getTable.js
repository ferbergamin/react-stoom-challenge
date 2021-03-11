const getTable = (tablename) => {
  return JSON.parse(localStorage.getItem(tablename))
}

export default getTable
