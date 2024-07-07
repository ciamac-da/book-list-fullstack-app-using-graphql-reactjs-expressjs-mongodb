import React, { Component } from "react";
import { graphql } from "@apollo/react-hoc";
import { getBookQuery} from '../../queries/queries';


class BookDetails extends Component {
    displayBookDetails(){
        const {book} = this.props.data;
        if(book){
            return(
                <div className="details">
                    <h2>{book.name}</h2>
                    <h2 className="authorName">Author : {book.author.name}</h2>
                    <h3>Genre : {book.genre}</h3>
                    <h3 className="allBooksText">All Books by this author:</h3>
                    <ul className="other-books">
                        {book.author.books.map(item=>{
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            )
        }else{
            return(
                <div>No Book selected...</div>
            )
        }
    }
    render() {
        console.log(this.props)
      return (
        <div id="book-details">
         {this.displayBookDetails()}
        </div>
      );
    }
  }

  export default graphql(getBookQuery,{
      options:(props)=>{
          return{
              variables:{
                  id: props.bookId
              }
          }
      }
  })(BookDetails);