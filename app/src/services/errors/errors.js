import { tables } from 'constants/index'

const NotFound = (tableName) => {
  throw new Error(`${tables.translateName(tableName)} não encontrado`)
}

const InvalidParams = (params) => {
  throw new Error(`Parâmetros inválidos: ${params}`)
}

const errors = { NotFound, InvalidParams }
export default errors
