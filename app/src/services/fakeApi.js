import { errors } from './errors'
import { findById, generateId, updateObject } from './methods'

const post = (tableName, table, payload) => {
  const { data, attributtes } = table
  if (!payload || Object.keys(payload).length === 0) {
    errors.InvalidParams(attributtes.join(', '))
  }

  const object = updateObject(attributtes, payload, { id: generateId(data) })

  const newTable = table
  const newData = [object, ...data]
  newTable.data = newData
  localStorage.setItem(tableName, JSON.stringify(newData))
  return newTable
}

const update = (tableName, table, payload) => {
  const { data, attributtes } = table

  const { id, params } = payload
  if (!id) {
    errors.InvalidParams('id')
  }

  const object = findById(data, id)
  if (!object) {
    errors.NotFound(tableName)
  }

  const newObject = updateObject(attributtes, params, object)
  const newTable = table
  const dif = data.filter((obj) => obj.id !== id)
  const newData = [newObject, ...dif]
  newTable.data = newData
  localStorage.setItem(tableName, JSON.stringify(newData))
  return newTable
}

const findBy = (data, params) => {
  return data.map((object) => {
    let match = true
    for (let key in params) {
      if (object.hasOwnProperty(key)) {
        if (params[key] !== object[key]) {
          match = false
        }
      } else {
        match = false
      }
    }
    if (match) {
      return object
    }
    return null
  })
}

const get = (tableName) => {
  return JSON.parse(localStorage.getItem(tableName) || [])
}

const fakeApi = {
  get,
  post,
  update,
  findBy,
  find: findById,
}

export default fakeApi
