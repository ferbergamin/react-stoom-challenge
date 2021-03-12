const updateObject = (attributtes, payload, oldObject = undefined) => {
  const object = oldObject || {}
  for (let key in payload) {
    if (attributtes.includes(key)) {
      object[key] = payload[key]
    }
  }

  return object
}

export default updateObject
