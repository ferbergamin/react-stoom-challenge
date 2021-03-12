const findById = (tableData = [], id) => {
  return tableData.find((data) => data.id === id)
}

export default findById
