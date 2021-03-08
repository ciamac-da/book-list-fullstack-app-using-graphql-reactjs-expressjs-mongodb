import React, { Component } from 'react';
import { gql } from "graphql-tag";
import { graphql } from '@apollo/react-hoc';

const getBooksQuery = gql`
{
 books {
     name
     id
 }   
}
`

class BookList extends Component {
    render() {
        console.log(this.props)
        return ( 
        <div>
        <ul id="book-list">
        <li>Book Name</li>
        </ul> 
        </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);