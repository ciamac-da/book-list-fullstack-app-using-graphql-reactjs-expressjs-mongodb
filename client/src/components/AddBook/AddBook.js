import React, { Component } from "react";
import { graphql} from "@apollo/react-hoc";
import { getAuthorsQuery, addBookMutation, getBooksQuery} from '../../queries/queries';
import {flowRight as compose} from 'lodash';

class AddBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      genre:'',
      authorId:''
    }
  }
  displayAuthors(){
    var data = this.props.getAuthorsQuery;
    if(data.loading){
      return (<option disabled>Loading Authors...</option>)
    }else{
      return data.authors.map(author=>{
        return(<option key={author.id} value={author.id}>{author.name}</option>)
      })
    }
  }

  submitForm(e){
    e.preventDefault()
    this.props.addBookMutation({
      variables:{
        name :    this.state.name,
        genre:    this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  render() {
    return (
      <form id="add-books" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label> Book Name  </label> 
          <input required placeholder="Enter a Book Name..." type="text" onChange={ (e) => this.setState({name: e.target.value}) } />
        </div>

        <div className="field">
          <label> Genre  </label> 
          <input required placeholder="Enter a Genre..." type="text" onChange={ (e) => this.setState({genre: e.target.value})} />
        </div>

        <div className="field">
          <label> Author </label>{" "}
          <select onChange={ (e) => this.setState({authorId: e.target.value})} >
            <option> Select Author </option>{" "}
            {this.displayAuthors()}
          </select>{" "}
        <button>
        +
        &nbsp;
        <img src="https://img.icons8.com/ios-filled/25/000000/add-book.png"/> 
        </button>
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation,{name:"addBookMutation"})
)
(AddBook);
