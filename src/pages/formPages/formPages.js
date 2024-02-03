import React, {useState} from 'react';
import classes from "./formPagesModule.css";

const FormPages = () => {

    const [userInfo, setUserInfo] = useState({
        userName: ``,
        age: 0,
        position: ""
    })

    const [user, setUser] = useState()
    console.log(user, 'uder')

    const changeInput = (event) => {
        setUser(event.target.value)
    }

    const addUser = () => {

    }

    return (
        <div>
            <input type="text"
            name="userName"
            placeholder="user name"
            />
            <input type="number"
                   name="age"
                   placeholder="user name"
            />
            <input type="text"
                   name="position"
                   placeholder="position"
            />
            <button onClick={addUser}>add user</button>
        </div>
    );
};

export default FormPages;