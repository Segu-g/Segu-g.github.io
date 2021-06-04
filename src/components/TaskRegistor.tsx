import React from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../modules/tasksModule";
import { Task } from "../Types"

export default function TaskRegistor() {
    const input = React.createRef<HTMLInputElement>();
    const dispatch = useDispatch();
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (input.current != null) {
            dispatch(addTask(input.current.value));
            input.current.value = "";
        }
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <label>
                title:
                <input type="text" ref={input} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>)
}