import React from 'react';
import Todo from "../todo/Todo";
import classes from "./TodoList.module.css"
const TodoList = ( {tasks, handleDelete} ) => {
    return (
        <div className={classes.list}>
            {
                tasks.map(task =>
                    <Todo key={task.id} task={task} handleDelete={() => handleDelete(task.id)}/>
                )
            }
        </div>
    );
};

export default TodoList;