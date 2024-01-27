import React from 'react';
import classes from "./Modal.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const Modal = ( {
            handleShow,
            onChangeInput,
            handleAdd
        } ) => {

    return (
        <div>
            <div className={classes.modalWrapper}>

            </div>
            <div className={classes.modalContent}>
                {/*<button onClick={handleShow} >Close</button>*/}
                <Button onClick={handleShow} text={'Close'} />
                <Input placeholder={"Add tasks"} onChangeInput={onChangeInput} />
                <Button onClick={handleAdd} text={'Add'}/>
                {/*<button  onClick={() => handleAdd()}>Add</button>*/}
            </div>
        </div>
    );
};

export default Modal;