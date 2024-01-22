import React from 'react';
import classes from "./Todo.module.css";
import Button from "../button/Button";

const Todo = ( {task, handleDelete} ) => {
    return (
        <div className={classes.todo}>
            <p>{task.id} {task.title}</p>
            <Button onClick={() => handleDelete(task.id)} text={"delete"} />
        </div>
    );
};

export default Todo;