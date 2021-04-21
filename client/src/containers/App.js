import React, { Component } from "react";
import BookList from "../components/BookList/BookList";
import AddBook from "../components/AddBook/AddBook";
import Header from '../components/common/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/common/Footer/Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Main />      
          <BookList />
          <AddBook />
          <Footer />
        </div>
    );
  }
}

export default App;
