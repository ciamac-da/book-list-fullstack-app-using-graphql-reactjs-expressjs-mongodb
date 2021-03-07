if(process.env.DB !== "production")
require("dotenv").config()
const express = require('express') //! To import express
const schema = require('./schema/schema')
const {graphqlHTTP} = require('express-graphql') //! This package helps express to understand GraphQL and provides a 
//! simple way to create an express server . We use this as a middleware as a sigle routes

const mongoose = require("mongoose")
const app = express(); //! To store express package in a variable

mongoose.connect( process.env.DB, 
{ useNewUrlParser: true },
{ useUnifiedTopology: true }
)
mongoose.connection.once('open',()=>{
    console.log("Connected to the Database!")
})
//! Setting up a middleware!
app.use('/graphql',graphqlHTTP({
    //! schema to represent how our graph looks
    //!schema: schema ==> the names are same and because of ES6 feature we can just easily write schema
    schema,
    graphiql: true //! we wanna graphiql tool in /graphql path
}));


app.listen(4000,() => {
    //! Callback function
    console.log("Now listening for requests on port 4000")
})
//DB = 'mongodb+srv://marti4n00:lostDEMON392%3F%21@graphql-books.xetec.mongodb.net/test'
// 