import React, {useEffect, useState} from 'react';
import classes from "./Pokemon.module.css";
import axios from "axios";
import Modal from "../modal/Modal";
import PokemonInfoPage from "../../pages/pokemonInfoPage/PokemonInfoPage";
import {logDOM} from "@testing-library/react";
import { Link } from 'react-router-dom';
const PokemonCard = ({ pokemon } ) => {
    const [pokemonOne, setPokemonOne] = useState({})
    console.log(pokemonOne)
    const [show, setShow] = useState(false);

    const handleInfo = () => <Link to={`/pokemon/1`}/>;
    const handleShow = () => setShow(prevState => !prevState);

    const getPokemon = async (url) => {
        try {
            const { data } = await axios.get(url)
            return data
        } catch(e) {
            console.log("error". e)
        } finally {
            console.log("final")
        }
    }


    useEffect(() => {
        getPokemon(pokemon.url).then(pok => setPokemonOne(pok))
    }, [pokemon.url]);

    return (
        <div>
            <div className={classes.card_content}>
                {
                    show &&
                    <Modal  pokemon={pokemon}
                        handleShow={handleShow}
                    >
                        <PokemonInfoPage pokemonOne={pokemonOne}/>
                    </Modal>
                }
                <p>{pokemonOne.name}</p>

                {pokemonOne && <img src={pokemonOne.sprites?.other?.dream_world?.front_default} alt="pokemon"/>}
                {
                    pokemonOne && <Link to={`/pokemon/${pokemonOne.id}`}>подробнее</Link>
                }
                {/*<button onClick={handleShow} >More information</button>*/}
            </div>
        </div>
    );
};

export default PokemonCard;