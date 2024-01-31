import Modal from "./components/modal/Modal";
import React, { useState } from "react";
import Button from "./components/button/Button";
import TodoList from "./components/todoList/TodoList";
import Input from "./components/input/Input";
import UsersPages from "./pages/usersPages/UsersPages";
import PokemonPages from "./pages/pokemonPages/pokemonPages";

function App() {

    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [local, setLocal] = useState([]);
    const [task, setTask] = useState([]);
    const [users, setUsers] = useState([]);
    // console.log(users)

    const [filter, setFilter] = useState("all");

    const handleShow = () => setShow(prevState => !prevState);

    const BASE_URL = "https://jsonplaceholder.typicode.com/";

    const getApi = async (endpoint) => {
        const data = await fetch(BASE_URL + endpoint);
        const users = await data.json();
        console.log(users)
        // localStorage.setItem('todos', JSON.stringify(todos));
        setUsers(users)
    };

    const getFromLocalStorage = () => {
        setLocal(JSON.parse(localStorage.getItem('todos')));
    };

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const onChangeSearch = (event) => {
        setSearchInput(event.target.value);
        const filter = task.filter(task => {
            return task.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setTask(filter);
    };

    const handleAdd = () => {
        setTask(prev => [
            ...prev,
            {
                id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
                title: input,
                completed: false
            }
        ]);
        setInput('');
    };

    const handleDone = (id) => {
        setTask(task.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }));
    };

    const handleEdit = (newTitle) => {
        setTask(task.map(task => {
            if (task.id === newTitle.id) {
                return {
                    ...task,
                    title: newTitle.title
                };
            }
            return task;
        }));
    };

    const handleClear = () => {
        setTask([]);
        setLocal([]);
    };

    const handleDelete = (id) => {
        setTask(task.filter(task => task.id !== id));
    };

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };
    const filteredTasks = () => {
        if (filter === "completed") {
            return task.filter(task => task.completed);
        } else if (filter === "incomplete") {
            return task.filter(task => !task.completed);
        } else {
            return task;
        }
    };

    // React.useEffect(() => {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('todos'));
    //     if (myLocalStorage === null) {
    //         localStorage.setItem('todos', JSON.stringify(task));
    //     }
    //     if (localStorage.length !== null) {
    //         setTask(myLocalStorage);
    //     }
    // }, []);
    //
    // React.useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(task));
    // }, [task]);
    // const limit = 5
    // const offset = 10
    React.useEffect(() => {
        getApi('users')
    }, [])

    return (
        <div>
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    onChangeInput={onChangeInput}
                    handleAdd={handleAdd}
                >
                </Modal>
            }

            <Button onClick={handleShow} text={'Open'} />
            <Button onClick={() => getApi('todos')} text={"getTodos"} />
            <Button onClick={() => getFromLocalStorage()} text={"get From LocalStorage"} />
            <Button onClick={handleClear} text={"Clear all tasks"} />
            <Input placeholder={"search"} type={"search"} onChangeInput={onChangeSearch} />


            <select value={filter} onChange={handleFilter}>
                <option value="all">All Tasks</option>
                <option value="completed">Completed Tasks</option>
                <option value="incomplete">Incomplete Tasks</option>
            </select>

            {/*<TodoList key={task.id}*/}
            {/*          tasks={filteredTasks()}*/}
            {/*          handleDelete={handleDelete}*/}
            {/*          handleDone={handleDone}*/}
            {/*          handleEdit={handleEdit}*/}
            {/*/>*/}
            {/*<UsersPages users={users} />*/}
            <PokemonPages/>
        </div>
    );
}

export default App;