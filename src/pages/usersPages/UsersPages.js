import React, {useState} from 'react';
import classes from "./UsersPage.module.css";

const UsersPages = ({users}) => {
    const isUser = true;
    const [user1, setUser] = useState({})
    console.log(user1, "userState")
    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }


    return (
        <div className={classes.info}>
            {users.map(user =>
                <div key={user.id} className={classes.info}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button onClick={() => getUser(user.id)}>more</button>
                    { user1.id === user.id &&
                        <>
                            <div>{user1?.address?.street}</div>
                            <div>{user1?.company?.name}</div>
                        </>
                    }
                </div>
            )}
        </div>
    );
};

export default UsersPages;