import { gql } from "graphql-tag";


const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
mutation {
    addBook(name:"",genre:"", authorId:""){
        name
        id
    }
}
`


export {getBooksQuery, getAuthorsQuery, addBookMutation}