const { mergeResolvers } = require('@graphql-tools/merge')
const { buildMergeFiles } = require('./builder')

const buildResolvers = async () => await buildMergeFiles(mergeResolvers, { path: '../modules/**/**/index.js' })

module.exports = { buildResolvers }
