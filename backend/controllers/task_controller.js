const User = require('../models/users_schema');
const Task = require('../models/task_schema');


// this function edits employee details
module.exports.allTask = async function(req, res){
    const {username} = req.params;

    const tasks = await Task.find({username});
    res.status(200).json({tasks : tasks})
}
module.exports.editTask = async function(req, res){
    const {id} = req.params;
    const{task, due_date, level} = req.body; 

    console.log(task);
    await Task.findOneAndUpdate({_id : id}, {...req.body});
    res.status(200)
}
// this function deletes employee
module.exports.deleteTask = async function(req, res){
    const id = req.params.id;

    const employee = await Task.findOneAndDelete(id);
    res.status(200);
}

// this function adds task
module.exports.createTask = async function(req, res) {

    // console.log(req.body.email);
    try {
        const {
           username,
           task,
           due_date,
           level
        } = req.body;

        
        const taskObj = new Task({
            username,
            task,
            due_date,
            level
          
        });
        await taskObj.save(); 
        res.status(200).json({message: "Task created successfully", status : true})
           
      } catch (error) {  
        res.status(500).json({ message: error.message });
      } 
}
