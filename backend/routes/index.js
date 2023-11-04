const express = require("express");
const user = require("./users");
const task = require("./task");

const router = express.Router(); 
// const employees = require('./employees');


// this is handling all users route 
router.use('/user', user);
router.use('/task', task);


module.exports = router;

