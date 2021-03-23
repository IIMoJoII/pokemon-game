import {Route, useRouteMatch, Switch} from 'react-router-dom'
import StartPage from "./routs/Start";
import BoardPage from "./routs/Board";
import {pokemonContext} from "../../context/pokemonContext";
import {useState} from 'react';

const GamePage = () => {
    const [pokemon, setPokemon] = useState([]);

    const handlerSelectPokemon = (pokemonCard) => {
        if(pokemon.length < 5){
            setPokemon(prevState => [...prevState, pokemonCard]);
        }
    }

    console.log(pokemon)


    const match = useRouteMatch();
    return (
        <pokemonContext.Provider value={{
            pokemon,
            selectPokemon: handlerSelectPokemon
        }}>
            <Switch>
                <Route>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} component={BoardPage} />
                    {/*<Route path={`${match.path}/finish`} component={FinishPage}/>*/}
                </Route>
            </Switch>
        </pokemonContext.Provider>
    );
};

export default GamePage;
