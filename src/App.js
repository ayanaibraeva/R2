import Modal from "./components/modal/Modal";
import {logDOM} from "@testing-library/react";
import React, {useState} from "react";
import Input from "./components/input/Input";
import Counter from "./pages/counter/Counter";
import List from "./components/list/List";
import Button from "./components/button/Button";


function App() {

    const data = [
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]

    const [show, setShow] = useState(false )
    const [input, setInput] = useState('')
    console.log(input, 'input')
    const handleShow = () => setShow(!show)

    const changeInput = (event) => {
        setInput(event.target.value)
    }

  return (
    <div>
        <h1>Tasks List</h1>
        <List data={data}/>
        <Counter/>
        <h1>Input</h1>
        <Input
            placeholder={"name"}
            type={"text"}
            onChangeInput={changeInput}
        />
        {
            show  && <Modal handleShow={handleShow}>
                <h1>Content</h1>
            </Modal>
        }
        {/*<button onClick={handleShow}>Open</button>*/}
        <Button onClick={handleShow} text={'Open'} />
    </div>
  );
}

export default App;
