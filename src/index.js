import React from "react";
import ReactDOM from 'react-dom/client'

//graphQl and apolloClient
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import components
import App from "./App";

const httpLink = createHttpLink({
  uri: 'https://petgram-project-bryancol27.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

//import react router
import { BrowserRouter } from 'react-router-dom'; 

//import contexto react
import ProviderContext from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <ProviderContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderContext>
  </ApolloProvider>
)
