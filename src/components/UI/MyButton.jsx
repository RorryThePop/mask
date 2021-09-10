import React from 'react';
import classes from './MyBtn.module.scss'
const MyButton = (props) => {
    return (
        <button {...props} className={classes.MyBtn}>{props.children}</button>
    );
};

export default MyButton;