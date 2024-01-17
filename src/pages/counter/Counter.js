import React, {useState} from 'react';
import Button from "../../components/button/Button";

const Counter = () => {

    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count +1)
    }

    const handleDecrement = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            {/*<button onClick={handleIncrement}>increment</button>*/}
            {/*<button onClick={handleDecrement} >decrement</button>*/}
            <Button onClick={handleIncrement} text={"increment"} />
            <Button onClick={handleDecrement} text={"decrement"} />
        </div>
    );
};

export default Counter;