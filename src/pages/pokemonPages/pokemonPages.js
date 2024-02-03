import React, {useEffect, useState} from 'react';
import classes from "./PokemonPages.module.css";
import axios from "axios";
import PokemonCard from "../../components/pokemon/PokemonCard";
import Pagination from "../../components/pagination/Pagination";
const PokemonPages = () => {

    const [pokemonList, setPokemonList] = useState([])
    console.log(pokemonList, "pokemon")

    const getPokemon = async ( limit, offset ) => {
       try {
           const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
           return setPokemonList(data.results)
       } catch(e) {
           console.log("error". e)
       } finally {
           console.log("final")
        }
    }

    const [offset, setOffset] = useState(1)
    const [limit, setLimit] = useState(4)
    let page = Math.floor(offset/limit)+1
    if(page <= 0){
        page = 1
        setOffset(1)
    }

    const handlePrev = () => {
        setOffset(prev => prev-limit)
    }
    const handleNext = () => {
        setOffset(prev => prev+limit)
    }

    useEffect(() => {
        getPokemon( limit, offset )
    }, [offset, limit] )

    return (
        <>
            <input type="number"
                   onChange={event => setLimit(event.target.value)}
                   value={limit}
            />
            <div className={classes.pokemon}>
                {
                    pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
                }
            </div>
            <div className={classes.pagination}>
                <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev}/>
            </div>
        </>
    );
};

export default PokemonPages;