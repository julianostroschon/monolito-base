const { mergeTypeDefs } = require('@graphql-tools/merge')
const { buildMergeFiles } = require('./builder')

const buildTypeDefs = async () => await buildMergeFiles(mergeTypeDefs, { path: '../modules/', opts: { extensions: ['graphql'] } })

module.exports = { buildTypeDefs }
