import React from 'react'
import PokemonCard from "../../../../../components/PokemonCard/PokemonCard";
import s from './style.module.css'
import cn from 'classnames'

const PlayerBoard = ({ cards, onClickCard, player }) => {
    const [isSelected, setSelected] = React.useState(null)


    return (
        <div>
            {
                cards.map((item) => (
                    <div
                        className={cn(s.cardBoard, {[s.selected]: isSelected === item.id})}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard({player, ...item})
                        }}>
                        <PokemonCard
                            className={{width: 300, height: 200}}
                            key={item.id}
                            minimize
                            handleClick={false}
                            isActive
                            id={item.id}
                            values={item.values}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            toBoardStyle={true}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default PlayerBoard
