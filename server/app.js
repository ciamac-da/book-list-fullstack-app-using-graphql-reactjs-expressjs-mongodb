const express = require('express') //! To import express
const graphqlHTTP = require('express-graphql') //! This package helps express to understand GraphQL

const app = express(); //! To store express package in a variable

app.listen(4000,() => {
    console.log("Now listening for requests on port 4000")
})