import s from './style.module.css'
import {useContext, useState} from "react";
import {pokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {Link} from 'react-router-dom'

export const FinishPage = () => {
    const pokemons = useContext(pokemonContext)
    const [choosenPokemon, setChoosenPokemon] = useState([])
    const firebase = useContext(FireBaseContext)


    const handleAddOponentCard = (id) => {
        for(let i=0; i < pokemons.player2Pokemons.length; i++) {
            if(pokemons.player2Pokemons[i].id === id){
                pokemons.player2Pokemons[i].canAdd = true;
                setChoosenPokemon(pokemons.player2Pokemons[i])
            }
            else{
                pokemons.player2Pokemons[i].canAdd = false;
            }
        }
    }

    const handleAddToDataBase = () => {
        firebase.addPokemon(choosenPokemon);
    }

    console.log(pokemons.isVictory)

    return (
        <div className={s.finishPageWrapper}>
            <div className={s.finishPage}>
                {
                    Object.values(pokemons.pokemon).map((item) => (
                        <PokemonCard className={{width: 300, height: 200}}
                                     key={item.key}
                                     thiskey={item.key}
                                     minimize={true}
                                     handleClick={false}
                                     isActive
                                     id={item.id}
                                     values={item.values}
                                     name={item.name}
                                     img={item.img}
                                     type={item.type}
                                     toBoardStyle={true}
                        />)
                    )
                }

            </div>
            <Link to="/game"><button onClick={handleAddToDataBase} className={s.endGame}>End Game</button></Link>
            <div className={s.finishPage}>
                {
                    Object.values(pokemons.player2Pokemons).map((item) => (
                        <PokemonCard className={{width: 300, height: 200}}
                                     key={item.key}
                                     thiskey={item.key}
                                     minimize={true}
                                     handleClick={false}
                                     isAbleToGet={pokemons.isVictory}
                                     handleAdd={handleAddOponentCard}
                                     isActive
                                     id={item.id}
                                     values={item.values}
                                     name={item.name}
                                     img={item.img}
                                     type={item.type}
                                     canAdd={item.canAdd}
                                     toBoardStyle={true}
                        />)
                    )
                }
            </div>
        </div>
    )
}
