import React, {useState} from 'react';
import MyButton from "./UI/MyButton";

const LikeCounter = () => {
    const [increment, setIncrement] = useState(0)
    const counter = () => {
        setIncrement(increment + 1)
    }
    return (
        <MyButton onClick={counter}>{increment} &#10084;</MyButton>
    );
};

export default LikeCounter;