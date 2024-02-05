import React, {useState} from 'react';
import classes from "./formPagesModule.css";

const FormPages = () => {

    const [userInfo, setUserInfo] = useState({
        userName: ``,
        age: 0,
        position: ""
    })

    console.log(userInfo, 'user')

    const changeInput = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const addUser = () => {
        if (userInfo.userName === '' || userInfo.age === '' || userInfo.position === '') {
            return alert("Fill in the fields!")
        }

    }

    return (
        <div>
            <input type="text"
                    name="userName"
                    placeholder="user name"
                    onChange = {changeInput}
            />
            <input type="number"
                   name="age"
                   placeholder="age"
                   onChange = {changeInput}
            />
            <input type="text"
                   name="position"
                   placeholder="position"
                   onChange = {changeInput}
            />
            <button onClick={addUser}>add user</button>
        </div>
    );
};

export default FormPages;