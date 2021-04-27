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



export const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const [pokemons, setPokemons] = useState({});
    const selectedPokemonContext = useContext(pokemonContext);

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons)
        })
        selectedPokemonContext.deletePokemons();
    })

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

    const match = useRouteMatch();


    return (
        <div>
            <Layout
                id="cards"
                title="Game"
                colorTitle="#FEFEFE"
                colorBg={"#202736"}>
                <Link to={`${match.path}board/`}><button disabled={selectedPokemonContext.pokemon.length !== 5} className={s.createBtn}>Start Game</button></Link>
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

