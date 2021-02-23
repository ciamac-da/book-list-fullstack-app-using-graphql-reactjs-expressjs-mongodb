const graphql = require('graphql')
const _= require('lodash')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

// Dummy Data
var books = [
    { name: 'Name of the wind', genre:'Fantasy', id:'1'},
    { name: 'The Final Empire', genre:'Fantasy', id:'2'},
    { name: 'The Long Earth', genre:'Sci-Fi', id:'3'},
];


const BookType = new GraphQLObjectType({
    //! A function which takes an Object
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
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
                    type: GraphQLString
                }
            },
            resolve(parent, args){
                // Code to get data from db
               return _.find(books,{id: args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})