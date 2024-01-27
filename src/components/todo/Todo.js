import React, {useState} from 'react';
import classes from "./Todo.module.css";
import Button from "../button/Button";
import classNames from "classnames";


const Todo = ({ task, handleDelete, index, handleDone, handleEdit, setCurrentEdit, isEdit }) => {
    const [newTitle, setNewTitle] = useState(task.title);
    const todoClasses = classNames ({
        [classes.todo]: true,
        [classes.completed]: task.completed
    });

    const handleSave = () => {
        handleEdit({
            ...task, title: newTitle

        })
        setCurrentEdit('')
    }

    const handleCansel = () => {
        setCurrentEdit('')
    }


    return (
        <>{ isEdit
            ?   <div className={classes.edit}>
                    <input type={"text"}
                           value={newTitle}
                           onChange={event => setNewTitle(event.target.value)}
                    />
                    <Button onClick={handleSave} text={"save"} />
                    <Button onClick={handleCansel } text={"cancel"} />
                </div>
            :   <div className={todoClasses}>
                    <p>{index + 1} {task.title}</p>
                    <Button onClick={() => handleDone(task.id)} text={"done"} />
                    <Button onClick={() => setCurrentEdit(task.id)} text={"edit"} />
                    <Button onClick={() => handleDelete(task.id)} text={"delete"} />
                </div>
        }
        </>
    );
};

export default Todo;