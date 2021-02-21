import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './graphQL/apolloClient' 
import { Home } from './components'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
  </ApolloProvider>
  )
}

