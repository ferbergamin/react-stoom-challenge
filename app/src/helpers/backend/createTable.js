const createTable = (tablename, defaultData = []) => {
  if (Boolean(localStorage.getItem(tablename))) return

  localStorage.setItem(tablename, JSON.stringify(defaultData))
}

export default createTable
