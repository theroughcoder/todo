
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
const path = require("path");
const db = require("./config/mongoose");

const routes = require("./routes");
var cors = require('cors');


app.use(express.json())
// parsing encoded data 
app.use(express.urlencoded());
app.use(cors())

// for using static files 
app.use( express.static("assets")); 

// app.get('/', (req, res)=> {
//   console.log("working");
// })
app.use("/", routes); 

// server listener 

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})