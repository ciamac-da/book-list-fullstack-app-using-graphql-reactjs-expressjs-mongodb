import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

console.log(client);
  
ReactDOM.render(
    <ApolloProvider client={client}>
          <App/>
    </ApolloProvider>
    , document.getElementById('root')
);