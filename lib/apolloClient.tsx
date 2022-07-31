import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
    process.env.API_AUTH_TOKEN
    }`
  },
  cache: new InMemoryCache()
}) 
