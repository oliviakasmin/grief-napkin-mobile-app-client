import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import { View } from 'react-native'
import client from './graphQL/apolloClient' 
import AppContainer from './navigation'

export default function App() {
  return (
    <ApolloProvider client={client}>
       <View style={{ flex: 1 }}>
          <AppContainer/>
        </View>
    </ApolloProvider>
  )
}

