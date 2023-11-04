import { useDispatch, useSelector } from "react-redux";
import Style from "./todoFrom.module.css"
import { useRef } from "react";
import axios from "axios";

export const TodoFrom = ({setIsTodoForm}) => {

    const taskRef = useRef("")
    const levelRef = useRef("");
    const dueDateRef = useRef("");
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const createTaskHandler = async(e) => {

        e.preventDefault();

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_URL}/task/create-task`,
              {
                username: user.username,
                task: taskRef.current.value,
                level: levelRef.current.value,
                due_date: dueDateRef.current.value,
              });
      
      
            // dispatch({ type: "USER_LOGIN", payload: data })
            setTimeout(()=> setIsTodoForm(false), 1000);
      

      
          } catch (error) {
            console.log(error)
            
             taskRef.current.value = "";
             levelRef.current.value = "";
             dueDateRef.current.value = "";
      
          }
        
    }

    return (
        <div className={Style.todoFormWrap}>
            <form onSubmit={createTaskHandler} >
                <label>Task</label>
                <input
                    placeholder="Task"
                    type="text"
                    name="task"
                    ref={taskRef}
                />
                   <label>Due Date</label>
                <input ref={dueDateRef} type="date" placeholder="Due Date" name="birthday" />

                   <label>Level</label>
                <select id="cars" name="cars" ref={levelRef}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button className={Style.blueBtn} type="submit">
                    Create Task
                </button>
            </form>
        </div>
    )
}

