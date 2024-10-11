const { mapKeys, camelCase, snakeCase } = require('lodash')
const { connection } = require('./src/infra')

function snakeToCamelCase (arg) {
  return mapKeys(arg, (_, key) => camelCase(key))
}

module.exports = {
  client: 'pg',
  pool: { min: 0, max: 5, idleTimeoutMillis: 60000 },
  version: '7.2',
  postProcessResponse: result => {
    if (Array.isArray(result)) {
      return result.map(snakeToCamelCase)
    }
    return snakeToCamelCase(result)
  },
  wrapIdentifier: (
    value,
    origImpl
  ) => origImpl(snakeCase(value)),
  connection,
  migrations: {
    tableName: 'knex_migrations'
  }
}
