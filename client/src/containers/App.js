import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client"
import BookList from "../components/BookList/BookList"


const client = new ApolloClient({
    uri:'http://localhost:4000/grapgql'
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