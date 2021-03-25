import React, {useState, useEffect} from "react";
import 'firebase/database';
import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import Layout from "../../../../components/Layout/Layout";
import {useContext} from 'react';
import {pokemonContext} from "../../../../context/pokemonContext";
import {useRouteMatch} from "react-router-dom";
import {Link} from "react-router-dom";
import {FireBaseContext} from "../../../../context/firebaseContext";

const DATA = {
    "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
    ],
    "base_experience": 122,
    "height": 11,
    "weight": 300,
    "id": 17,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
    },
    "type": "normal",
    "values": {
        "top": 7,
        "right": 5,
        "bottom": 1,
        "left": 2
    }
}


export const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const [pokemons, setPokemons] = useState({});
    const selectedPokemonContext = useContext(pokemonContext);

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons)
        })
    }, [])

    function handleClickCard(key) {
        if(pokemons[key].active === undefined){
            firebase.postPokemon(key, () => {
                setPokemons(prevState => {
                    return Object.entries(prevState).reduce((acc, item) => {
                        const pokemon = {...item[1]};
                        if (key === item[0]) {
                            pokemon.active = true;
                        }

                        acc[item[0]] = pokemon;

                        return acc;
                    }, {});
                })
            })
        } else {
            if(pokemons[key].selected === undefined){
                pokemons[key].selected = true;
                selectedPokemonContext.selectPokemon(pokemons[key])
            }
        }
    }


    const handleAddPokemon = () => {
        firebase.addPokemon(DATA);
    }

    const match = useRouteMatch();

    console.log(55, match)

    return (
        <div>
            <Layout
                id="cards"
                title="Game"
                colorTitle="#FEFEFE"
                colorBg={"#202736"}>
                <Link to={`${match.path}board/`}><button disabled={selectedPokemonContext.pokemon.length !== 5} className={s.createBtn}>Start Game</button></Link>
                <button onClick={handleAddPokemon} className={s.createBtn}>Create Pokemon</button>
                <div className="flex">
                    {
                        Object.entries(pokemons).map(([key, {name, img, id, type, values, active, selected}]) =>
                            <PokemonCard
                                className={{width: 300, height: 400}}
                                key={key}
                                thiskey={key}
                                handleClick={true}
                                minimize={false}
                                handleClickCard={handleClickCard}
                                isSelected={selected}
                                isActive={active}
                                id={id}
                                values={values}
                                name={name}
                                img={img}
                                type={type}
                            />)
                    }
                </div>
            </Layout>
        </div>
    );
}

export default StartPage;

