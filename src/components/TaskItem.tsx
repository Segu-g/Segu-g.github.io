import React from "react"
import { useDispatch } from "react-redux";
import { doneTask } from "../modules/tasksModule";
import { Task } from "../Types"


function TaskItem(props: { task: Task }) {
    const dispatch = useDispatch();

    const style: React.CSSProperties = { color: props.task.done ? "gray" : "black" }
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        dispatch(doneTask(props.task));
    }

    return (
        <div style={style} onClick={handleClick}>
            {props.task.id}
            {props.task.title}
        </div>
    );
}


export default TaskItem;