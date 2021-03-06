const graphql = require('graphql')
const _= require('lodash')
const Book = require("../models/book")
const Author = require("../models/author")


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql

//! Dummy Data just for testing
/* var books = [
    { name: 'The Long Earth'     ,   genre:'Sci-Fi' , id:'1', authorid:"1"},
    { name: 'Nuu'                ,   genre:'Fantasy', id:'2', authorid:"2"},
    { name: 'Hack the Planet'    ,   genre:'Horror' , id:'3', authorid:"3"},
    { name: 'Death Stranding'    ,   genre:'Fantasy', id:'4', authorid:"4"},
    { name: 'One second to Mars' ,   genre:'Sci-Fi' , id:'1', authorid:"1"},
    { name: 'Free Hacker'        ,   genre:'Fantasy', id:'2', authorid:"2"},
    { name: 'Kali Linux'         ,   genre:'Horror' , id:'3', authorid:"3"},
];

var authors = [
    { name: 'Marti4n',     age: 33, id:'1'},
    { name: 'Anx',         age: 37, id:'2'},
    { name: 'CiHakTor',    age: 31, id:'3'},
    { name: 'Sam Bridges', age: 40, id:'4'},
]; */


const BookType = new GraphQLObjectType({
    //! A function which takes an Object
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        author: {
            type: AuthorType,
            resolve(parent, args){
               // return _.find(authors, {id: parent.authorid})
               return Author.findById(parent.authorId)
            }
        }
    })
});


const AuthorType = new GraphQLObjectType({
    //! A function which takes an Object
    name: 'Author',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
               // return _.filter(books, {authorid: parent.id})
               return Book.find({authorId: parent.id});
            }
        }
    })
});

//! Hier ist echt ernst!
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    //! We don't need to wrap fields object in a function 
    //! because the order is not that important here!
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                // Code to get data from db
              // return _.find(books,{id: args.id});
              return Book.findById(args.id)
            }
        },

       author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                // Code to get data from db
            //   return _.find(authors,{id: args.id});
            return Author.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
         //       return books
         return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
           //     return authors
           return Author.find({});
            }
        }

    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
               return author.save()
            }
        },
        addBook: {
            type: BookType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                })
                return book.save()
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})