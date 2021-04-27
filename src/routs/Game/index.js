import {Route, useRouteMatch, Switch} from 'react-router-dom'
import StartPage from "./routs/Start";
import BoardPage from "./routs/Board";
import {pokemonContext} from "../../context/pokemonContext";
import {useState} from 'react';
import {FinishPage} from "./routs/Finish";

const GamePage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [isVictory, setVictory] = useState(false);
    const [player2Pokemons, setPlayer2Pokemons] = useState([]);

    const handlerSelectPokemon = (pokemonCard) => {
        if(pokemon.length < 5){
            setPokemon(prevState => [...prevState, pokemonCard]);
        }
    }

    const handlerSetVictory = (info) => {
        setVictory(info)
    }

    const handlerSelectPlayer2Pokemon = (player2) => {
        setPlayer2Pokemons(player2)
    }

    const handleDeletePokemons = () => {
        setPokemon([])
    }

    const match = useRouteMatch();

    return (
        <pokemonContext.Provider value={{
            pokemon,
            player2Pokemons,
            isVictory,
            selectPokemon: handlerSelectPokemon,
            selectPlayer2Pokemon: handlerSelectPlayer2Pokemon,
            setVictory: handlerSetVictory,
            deletePokemons: handleDeletePokemons
        }}>
            <Switch>
                <Route>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} exact component={BoardPage} />
                    <Route path={`${match.path}/board/finish`} exact component={FinishPage}/>
                </Route>
            </Switch>
        </pokemonContext.Provider>
    );
};

export default GamePage;
