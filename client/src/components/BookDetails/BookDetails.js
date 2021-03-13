import React, { Component } from "react";
import { graphql } from "@apollo/react-hoc";
import { getBookQuery} from '../../queries/queries';


class BookDetails extends Component {
    render() {
      console.log(this.props);
      return (
        <div id="book-detail">
         <p>Output Book</p>
        </div>
      );
    }
  }

  export default graphql(getBookQuery)(BookDetails);