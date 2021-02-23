const express = require('express') //! To import express
const schema = require('./schema/schema')
const graphqlHTTP = require('express-graphql') //! This package helps express to understand GraphQL and provides a 
//! simple way to create an express server . We use this as a middleware as a sigle routes


const app = express(); //! To store express package in a variable


//! Setting up a middleware!
app.use('/graphql',graphqlHTTP({
    // schema to represent how our graph looks
}))


app.listen(4000,() => {
    //! Callback function
    console.log("Now listening for requests on port 4000")
})