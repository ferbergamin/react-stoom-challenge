const createTable = (tablename) => {
  if (Boolean(localStorage.getItem(tablename))) return

  localStorage.setItem(tablename, '[]')
}

export default createTable
