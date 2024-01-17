import React from 'react';
import classes from "./Modal.module.css";
import Button from "../button/Button";

const Modal = ( {children, handleShow} ) => {


    return (
        <div>
            <div className={classes.modalWrapper}>

            </div>
            <div className={classes.modalContent}>
                {/*<button onClick={handleShow} >Close</button>*/}
                <Button onClick={handleShow} text={'Close'} />
                {children}
            </div>
        </div>
    );
};

export default Modal;