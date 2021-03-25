import s from './style.module.css';
import {pokemonContext} from "../../../../context/pokemonContext";
import React, {useContext} from 'react'
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";

const BoardPage = () => {
    const pokemons = useContext(pokemonContext)

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.entries(pokemons.pokemon).map(([key, {name, img, id, type, values, active}]) =>
                        <PokemonCard
                            className={{width: 300, height: 200}}
                            key={key}
                            thiskey={key}
                            minimize={true}
                            handleClick={false}
                            isActive={active}
                            id={id}
                            values={values}
                            name={name}
                            img={img}
                            type={type}
                            toBoardStyle={true}
                        />)
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
