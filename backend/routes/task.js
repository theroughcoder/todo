const express = require("express");
const{createTask, allTask, editTask, deleteTask} = require("../controllers/task_controller.js");

const router = express.Router();

router.post('/create-task', createTask);
router.get('/:username', allTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

// router.post('/deletestudent', deleteStudent ) ;
 

module.exports = router;