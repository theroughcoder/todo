// schema
const mongoose = require( "mongoose");

const {ObjectId} = mongoose.Schema.Types;

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "task is required"],
      text: true,
    },

    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
    
    },
    level: {
      type: String,
      required: [true, "level is required"],
      enum: ['High', 'Medium', 'Low']
    
    },
    due_date: {
      type: Date,
      required: [true, "date is required"],
      trim: true,
    },
  
  },
  {
    timestamps: true,
  }
);
//creating model or collection
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
