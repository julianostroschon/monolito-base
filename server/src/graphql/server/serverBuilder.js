const { buildResolvers } = require('./buildResolvers')
const { buildTypeDefs } = require('./buildTypeDefs')
const { ApolloServer } = require('apollo-server')
const database = require('../../infra/database')

const buildServer = async () => {
  const [resolvers, typeDefs] = await Promise.all([
    buildResolvers(),
    buildTypeDefs()
  ])

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      database
    }
  })
  return server
}

module.exports = { buildServer }
