import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/'>
                    Формы
                </Link>
            </li>
            <li>
                <Link to='/pokemon'>
                    pokemon
                </Link>
            </li>
        </ul>
    );
};

export default Menu;