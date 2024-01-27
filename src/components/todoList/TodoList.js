import React, {useState} from 'react';
import Todo from "../todo/Todo";
import classes from "./TodoList.module.css"
const TodoList = ( {tasks, handleDelete, handleDone, handleEdit} ) => {
    const [currentEdit, setCurrentEdit] = useState('')
    console.log(currentEdit, "edit")


    return (
        <div className={classes.list} >
            {
                tasks.map((task, index) =>
                    <Todo key={task.id}
                          task={task}
                          handleDelete={() => handleDelete(task.id)}
                          index={index}
                          handleDone={handleDone}

                          handleEdit={handleEdit}
                          setCurrentEdit={setCurrentEdit}
                          isEdit={currentEdit === task.id}
                    />
                )
            }
        </div>
    );
};

export default TodoList;