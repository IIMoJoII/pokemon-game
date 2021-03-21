import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Layout from "../../components/Layout/Layout";
import React, {useState, useEffect} from "react";
import database from "../../service/firebase";
import firebase from 'firebase/app';
import 'firebase/database';
import s from './style.module.css'


export const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, [pokemons])

    function writePokemonData(key) {
        firebase.database().ref('pokemons/' + key).update({
            active: true
        });
    }

    const handleAddPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        firebase.database().ref('pokemons/' + newKey).set({
            "abilities": [
                "keen-eye",
                "tangled-feet",
                "big-pecks"
            ],
            "base_experience": 122,
            "height": 11,
            "active": false,
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
        });
    }

    const handleClickCard = (pokemonId, key) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === pokemonId) {
                    writePokemonData(key)
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    return (
        <div>

            <Layout
                id="cards"
                title="Game"
                colorTitle="#FEFEFE"
                colorBg={"#202736"}>
                <button onClick={handleAddPokemon} className={s.createBtn}>Create Pokemon</button>
                <div className="flex">
                    {
                        Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>
                            <PokemonCard
                                key={key}
                                thiskey={key}
                                handleClickCard={handleClickCard}
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

export default GamePage;

