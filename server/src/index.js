// require('dotenv/config')
const { buildServer } = require('./graphql/server/serverBuilder')

buildServer()
  .then(async (server) => {
    return server.listen(process.env.SERVER_PORT || 5656)
  }).then(({ url }) => console.log(` server start ${url}`))
