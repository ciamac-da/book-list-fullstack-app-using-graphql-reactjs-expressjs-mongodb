const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql


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
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})