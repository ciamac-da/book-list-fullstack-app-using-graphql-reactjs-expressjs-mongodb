import React, { Component } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import BookList from "../components/BookList/BookList"

const client = new ApolloClient({
    uri:'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

class App extends Component {
    render() {
        return ( 
            <ApolloProvider client={client}>
            <div className = "App" >
            <h1> Heyy </h1> 
            <BookList />
            </div>
            </ApolloProvider>
        );
    }
}

export default App;