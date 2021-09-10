import React from 'react';
import classes from "./MyBtn.module.scss";

const BidButton = (props) => {
    return (
        <button {...props} className={classes.MyChooser}>{props.children}</button>
    );
};

export default BidButton;