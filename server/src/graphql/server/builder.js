const { loadFiles } = require('@graphql-tools/load-files')
const { join } = require('path')

const buildOrigin = (path) => {
  if (path) {
    return join(__dirname, path)
  }
  return join(__dirname)
}

const buildMergeFiles = async (fn, { path = undefined, opts = undefined }) => {
  const origin = buildOrigin(path)
  const types = await loadFiles(origin, opts)
  return fn(types, { all: true })
}

module.exports = { buildMergeFiles }
