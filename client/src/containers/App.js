import React, { Component } from "react";
import BookList from "../components/BookList/BookList";
import AddBook from "../components/AddBook/AddBook";


class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
