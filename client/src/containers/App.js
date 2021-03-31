import React, { Component } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import BookList from "../components/BookList/BookList";
import AddBook from "../components/AddBook/AddBook";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <div className="myH1">
          <h1> Booklist Mern mini App using 
          React
          <img src="https://img.icons8.com/officel/27/000000/react.png"/> 
          &nbsp;
          GraphQL
          <img src="https://img.icons8.com/color/27/000000/graphql.png"/>
           &nbsp;
           Express
           <img src="https://img.icons8.com/pastel-glyph/25/000000/express-shopping--v1.png"/>
           &nbsp;
          MongoDB 
          <img src="https://img.icons8.com/color/27/000000/mongodb.png"/>   
          </h1>
        </div>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
