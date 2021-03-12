const generateId = (data) => {
  if (data.length === 0) return 1

  return data.reverse()[0].id + 1
}

export default generateId
