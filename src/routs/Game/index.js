import db from "../../pokemons.json";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Layout from "../../components/Layout/Layout";
import React, {useState} from "react";

export const GamePage = () => {
    const [pokemonsIdArr, setPokemonsIdArr] = useState(db.pokemons)

    const handleClickCard = (pokemonId) => {
        setPokemonsIdArr(prevState => prevState.filter(item => {
            if(item.id === pokemonId){
                item.active = true;
            }
            return true;
        }))
    }

    return (
        <div>
            <Layout
                id="cards"
                title="Game"
                colorTitle="#FEFEFE"
                colorBg={"#202736"}>
                <div className="flex">
                    {
                        (pokemonsIdArr).map((item) =>
                            <PokemonCard
                                key={item.id}
                                handleClickCard={handleClickCard}
                                isActive={item.active}
                                id={item.id}
                                values={item.values}
                                name={item.name}
                                img={item.img}
                                type={item.type}
                            />)
                    }
                </div>
            </Layout>
        </div>
    );
}

export default GamePage;

