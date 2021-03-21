import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

// const BASE_URL = 'http://localhost:3001/griefNapkin';
const BASE_URL = 'http://localhost:4000/graphql'

const httpLink = new HttpLink({
  uri: BASE_URL,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client
