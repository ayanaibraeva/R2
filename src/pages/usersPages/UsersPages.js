import React from 'react';
import classes from "./UsersPage.module.css";

const UsersPages = ({users}) => {
    const isUser = true;
    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }


    return (
        <div className={classes.info}>
            {users.map(user =>
                <div key={user.id} className={classes.info}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button onClick={() => getUser(user.id)}>more</button>
                    { isUser &&
                        <div>More information</div>
                    }
                </div>
            )}
        </div>
    );
};

export default UsersPages;