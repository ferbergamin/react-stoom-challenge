const generateId = (data) => {
  if (data.length === 0) return 1
  return data.sort((a, b) => a.id - b.id).reverse()[0].id + 1
}

export default generateId
