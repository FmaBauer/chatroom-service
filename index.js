import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import pkg from 'body-parser'
const json = pkg.json
import http from 'http'
import express from 'express'
import resolvers from './graphql/resolvers.js'
import typeDefs from './graphql/defs.js'
import startIo from './io.js'

const app = express()

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const appoServer = new ApolloServer({
  typeDefs,
  resolvers,
})
await appoServer.start()
app.use('/graphql', cors(), json(), expressMiddleware(appoServer))
const server = http.createServer(app)
startIo(server)
server.listen(4000, () => {
  console.log('listening on *:4000');
})
