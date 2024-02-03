import React, {useEffect, useState} from 'react';
import classes from "./Pokemon.module.css";
import axios from "axios";

const PokemonCard = ({ pokemon } ) => {

    const [pokemonOne, setPokemonOne] = useState({})

    const getPokemon = async (url) => {
        try {
            const { data } = await axios.get(url)
            return setPokemonOne(data.sprites.other.dream_world.front_default)
        } catch(e) {
            console.log("error". e)
        } finally {
            console.log("final")
        }
    }

    const limit = 5;

    useEffect(() => {
        getPokemon(pokemon.url)
    }, [pokemon.url]);

    return (
        <div>
            <div className={classes.card_content}>
                <p>{pokemon.name}</p>
                <img src={pokemonOne} alt=""/>
                {/*{pokemonOne}*/}
            </div>
        </div>
    );
};

export default PokemonCard;