import Modal from "./components/modal/Modal";
import React, {useState} from "react";
import Button from "./components/button/Button";
import TodoList from "./components/todoList/TodoList";
import Input from "./components/input/Input";



function App() {

    // const   tasks = [
    //     {
    //         id:1 ,
    //         title: 'coding'
    //     },
    //     {
    //         id:2,
    //         title: 'eat'
    //     },
    //     {
    //         id:3,
    //         title: 'sleep'
    //     }
    // ]

    const [show, setShow] = useState(false )
    const [input, setInput] = useState('')
    const [searchInput, setSearchInput] = useState('')
    console.log(searchInput)
    const [task, setTask] = useState([
        {
            id:1,
            title: "coding",
            completed: false
        },
        {
            id:2,
            title: "learning",
            completed: false
        }
    ])

    const handleShow = () => setShow(prevState => !prevState);
    // если состояние нужно поменять на противоположное, то нужно использовать prevState

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }

    const onChangeSearch = (event) => {
        setSearchInput(event.target.value)
        const filter= task.filter(task => {
          return task.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setTask(filter)
    }


    const handleAdd = () => {
        setTask( prev => [
            ...prev,
            {
                id: task.length === 0 ? 1 : task[task.length -1].id + 1,
                title: input
            }
    ])
    }

    const handleDone = (id) => {
        task.map(task => {
            if(task.id === id){
                return task.completed = !task.completed
            }
            return task
        })
        setTask([...task])
    }


    const handleDelete = (id) => {
        setTask(task.filter(task => task.id !== id))
    }

    //task.id !== id - разница в порядке

    React.useEffect(() => {
        console.log(task, 'useEffect')
    },[ task ])

  return (
    <div>
        {
            show  &&
            <Modal
                handleShow={handleShow}
                onChangeInput={onChangeInput}
                handleAdd={handleAdd}
            >
            </Modal>
        }
        {/*<button onClick={handleShow}>Open</button>*/}
        <Button onClick={handleShow} text={'Open'} />
        <Input placeholder={"search"} type={"search"} onChangeInput={onChangeSearch} />
        <TodoList key={task.id} tasks={task} handleDelete={handleDelete} handleDone={handleDone} />
    </div>
  );
}

export default App;
