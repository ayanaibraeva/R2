import React from 'react';
import classes from "./Modal.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const Modal = ( {
             children,
            handleShow
        } ) => {
    // console.log(pokemon)
    return (
        <div>
            <div className={classes.modalWrapper}>

            </div>
            <div className={classes.modalContent}>
                {/*<button onClick={handleShow} >Close</button>*/}
                <Button onClick={handleShow} text={'Close'} />
                {children}
                {/*<Input placeholder={"Add tasks"} onChangeInput={onChangeInput} />*/}
                {/*<Button onClick={handleAdd} text={'Add'}/>*/}
                {/*<button  onClick={() => handleAdd()}>Add</button>*/}
                {/*<h1>{pokemon.name}</h1>*/}
            </div>
        </div>
    );
};

export default Modal;