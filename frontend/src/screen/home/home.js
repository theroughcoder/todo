import { useEffect, useState } from "react";
import { TodoFrom } from "../../component/todoForm/todoFrom";
import Style from "./home.module.css"
import { TodoList } from "../../component/todoList/todoList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const [isTodoForm, setIsTodoForm] = useState(true);
    const {user} = useSelector((state) => state);
    const navigate = useNavigate()

    useEffect(()=>{
        if(user == undefined){
            navigate('/signin');
        }

    }, [])
    
    return(
        <div className={Style.todoWrap}>
            <div className={Style.todoHeader }>
                {isTodoForm ? <h1>Create Task</h1> : <h1>Todo List</h1>}
                <button className={Style.todoWrapBtn +" "+ Style.blueBtn} onClick={()=>  setIsTodoForm((pre)=>!pre)}>
                    {isTodoForm ?  "Todo List" : "Todo From"}
                </button>
            </div>
            {
                isTodoForm ?
                 <TodoFrom setIsTodoForm={setIsTodoForm}/> :
                 <TodoList />

            }
        </div>
    )
}

export default Home;