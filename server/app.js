if(process.env.NODE_ENV !== "production")
require("dotenv").config()
const express = require('express') //! To import express
const schema = require('./schema/schema')
const {graphqlHTTP} = require('express-graphql') //! This package helps express to understand GraphQL and provides a 
//! simple way to create an express server . We use this as a middleware as a sigle routes
const { ApolloServer } = require("apollo-server-express")
const mongoose = require("mongoose");


const app = express(); //! To store express package in a variable
const PORT = process.env.PORT || 4000;

if(process.env.NODE_ENV === "production")
  app.use(express.static("../client/build"));

const server = new ApolloServer({schema});
server.applyMiddleware({app})

// Allow cross-origin requests

mongoose.connect( process.env.DB, 
{ useNewUrlParser: true },
{ useUnifiedTopology: true }
)
mongoose.connection.once('open',()=>{
    console.log("Connected to the Database!")
})
//! Setting up a middleware!
// app.use('/graphql',graphqlHTTP({
//     //! schema to represent how our graph looks
//     schema,
//     graphiql: true //! we wanna graphiql tool in /graphql path
// }));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
 
}


app.listen(PORT,() => {
    //! Callback function
    console.log(`Now listening for requests on port ${PORT}`)
})
