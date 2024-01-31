import React from 'react';
import classes from "./Pokemon.module.css";

const PokemonCard = ({pokemonList} ) => {
    return (
        <div className={classes.card}>
            {
                pokemonList.map(item =>
                    <div className={classes.card_content}>
                        <p>{item.name}</p>
                        <img src="url``" alt=""/>
                    </div>
                )
            }
        </div>
    );
};

export default PokemonCard;