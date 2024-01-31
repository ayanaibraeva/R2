import React, {useEffect, useState} from 'react';
import classes from "./PokemonPages.module.css";
import axios from "axios";
import PokemonCard from "../../components/pokemon/PokemonCard";
const PokemonPages = () => {

    const [pokemonList, setPokemonList] = useState([])
    console.log(pokemonList, "pokemon")

    const getPokemon = async () => {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon")
        return setPokemonList(data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div className={classes.pokemon}>
            <PokemonCard pokemonList={pokemonList} />
        </div>
    );
};

export default PokemonPages;