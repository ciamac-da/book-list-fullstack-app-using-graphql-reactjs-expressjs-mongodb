import React, { Component } from "react";
import { graphql } from "@apollo/react-hoc";
import { getBooksQuery} from '../../queries/queries';
import BookDetails from "../BookDetails/BookDetails";


class BookList extends Component {
  constructor(props){
    super(props)
      this.state = {
        selected: null
    }
  }
  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading Books... </div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id} onClick={(e)=> {this.setState({selected: book.id})}}> {book.name} </li>;
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="myList">
        <ul id="book-list"> {this.displayBooks()} 
        { this.state.selected ? <BookDetails bookId={this.state.selected}/> : null }
        </ul>{" "}
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
