import React from 'react';
import classes from "./Button.module.css";

const Button = ( props ) => {
    const { onClick, text } = props
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default Button;