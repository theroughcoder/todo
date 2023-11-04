// getting-started.js
// connecting the mongodb database with the server 
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sanchit2000sp1:99277todo@cluster0.scwlxhb.mongodb.net/?retryWrites=true&w=majority' );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const db = mongoose.connection;

module.exports = db; 


 