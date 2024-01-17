import React from 'react';
const List = ( {data} ) => {

    console.log(data)

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.task}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;