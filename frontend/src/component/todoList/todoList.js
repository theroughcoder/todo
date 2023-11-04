import { useEffect, useState } from "react";
import { TodoItem } from "./todoItem"
import Style from "./todoList.module.css"
import { useSelector } from "react-redux";
import axios from "axios";

export const TodoList = () => {
    const {user} = useSelector((state) => state)
    const [tasks, setTasks] = useState([]);

        useEffect(()=> {

            const fetchData = async() => {

                try {
                    const { data } = await axios.get(`${process.env.REACT_APP_URL}/task/${user.username}`,);
              
                    setTasks(data.tasks);
              
                  } catch (error) {
                    console.log(error)
                    
                
              
                  }
            }

            fetchData();

        }, [])


    return (
        <div className={Style.todoListWrap}>
            {
                tasks.map((task)=> {
                    return (

                        <TodoItem level={task.level} task={task.task} date={task.due_date} id={task._id} setTasks={setTasks}/>
                    )
                })
            }
            
        </div>
    )
}

