import { useEffect, useRef, useState } from "react"
import Style from "./todoList.module.css"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const TodoItem = ({ level, task, date, id, setTasks }) => {

    const [isTodoForm, setIsTodoForm] = useState(false);

    const taskRef = useRef("")
    const levelRef = useRef("");
    const dueDateRef = useRef("");
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();

    const editTaskHandler = async (e) => {

        e.preventDefault();

        try {
            setTasks((pre) => pre.map((i) => {
                if (i._id == id) {
                    return {
                        username: user.username,
                        task: taskRef.current.value,
                        level: levelRef.current.value,
                        due_date: dueDateRef.current.value,
                    }
                }
                return i

            }))
            setIsTodoForm(false);
            const { data } = await axios.put(`${process.env.REACT_APP_URL}/task/${id}`,
                {
                    username: user.username,
                    task: taskRef.current.value,
                    level: levelRef.current.value,
                    due_date: dueDateRef.current.value,
                });


            // dispatch({ type: "USER_LOGIN", payload: data })
            setTimeout(() => setIsTodoForm(false), 1000);


            taskRef.current.value = "";
            levelRef.current.value = "";
            dueDateRef.current.value = "";

        } catch (error) {
            console.log(error)


        }


    }

    async function deleteHandler() {

        setTasks((pre) => pre.filter((i) => i._id != id))
        try {
            const { data } = await axios.delete(`${process.env.REACT_APP_URL}/task/${id}`,
            );


        } catch (error) {
            console.log(error)


        }

    }

    return (
        <div className={Style.todoItemWrap}>

            <div className={Style.todoItem}>
                <div className={Style.todoLeft}>
                    <span className={Style.level}>
                        {level}
                    </span>
                    <div className={Style.dateLevelCont}>
                        <p className={Style.task}>{task}</p>
                        <span className={Style.date}>{date}</span>
                    </div>
                </div>
                <div className={Style.todoRight}>
                    <button onClick={() => setIsTodoForm((pre) => !pre)} className={Style.edit}>Edit</button>
                    <button onClick={deleteHandler} className={Style.delete}>Delete</button>
                </div>

            </div>
            {
                isTodoForm && (
                    <form onSubmit={editTaskHandler} className={Style.todoFormWrap}>
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
                            Edit Task
                        </button>
                    </form>
                )
            }
        </div>
    )
}
