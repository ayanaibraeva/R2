import React from 'react';
import classes from "./Todo.module.css";
import Button from "../button/Button";
import classNames from "classnames";

const Todo = ({ task, handleDelete, index, handleDone }) => {
    const todoClasses = classNames ({
        [classes.todo]: true,
        [classes.completed]: task.completed
    });

    return (
        <div className={todoClasses}>
            <p>{index + 1} {task.title}</p>
                <Button onClick={() => handleDone(task.id)} text={"done"} />
                <Button onClick={() => handleDelete(task.id)} text={"delete"} />
        </div>
    );
};

export default Todo;