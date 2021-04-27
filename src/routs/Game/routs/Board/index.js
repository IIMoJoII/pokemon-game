import s from './style.module.css';
import {pokemonContext} from "../../../../context/pokemonContext";
import React, {useContext, useState, useEffect} from 'react'
import {Link, useHistory, useRouteMatch} from 'react-router-dom'
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import PlayerBoard from "./playerBoard";


const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if(item.card.possession === 'red'){
            player2Count ++;
        }

        if(item.card.possession === 'blue'){
            player1Count ++;
        }
    })

    return [player1Count, player2Count]
}

const BoardPage = () => {
    let isFinished = false;
    const match = useRouteMatch();
    const player2PokemonContext = useContext(pokemonContext);
    const pokemons = useContext(pokemonContext)
    const [board, setBoard] = useState([])
    const [player1, setPlayer1] = useState(() => {return Object.values(pokemons.pokemon).map(item => ({...item, possession: 'blue',}))})
    const [player2, setPlayer2] = useState([])
    const history = useHistory();
    const [chooseCard, setChooseCard] = useState(null)
    const [steps, setSteps] = useState(0);

    if(Object.keys(pokemons.pokemon).length === 0){
        history.replace('/game');
    }

    const handleClickBoardPlate = async (position) => {
        if(chooseCard){
            const params = {
                position,
                card: chooseCard,
                board,
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if(chooseCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== chooseCard.id));
            }

            if(chooseCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== chooseCard.id));
            }

            setBoard(request.data)

            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    useEffect(() => {
        if(steps === 9){
            const [count1, count2] = counterWin(board, player1, player2);

            if(count1 > count2) {
                alert('WIN');
                player2PokemonContext.setVictory(true);
            } else if(count1 < count2) {
                alert('LOSE');
                player2PokemonContext.setVictory(false);
            } else {
                alert('DRAW')
                player2PokemonContext.setVictory(false);
            }
        }

    }, [steps])


    if(steps === 9){
        isFinished = true;
    }

    useEffect(async () => {
        const boarResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boarResponse.json();

        setBoard(boardRequest.data);

        const player2Responce = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        const player2Request = await player2Responce.json();

        setPlayer2(() => {return player2Request.data.map(item => ({...item, possession: 'red',}))});

        player2PokemonContext.selectPlayer2Pokemon(player2Request.data)
    }, [])



    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    onClickCard={(card) => setChooseCard(card)}
                    cards={player1}/>
            </div>
            {isFinished && <Link to={`${match.path}/finish/`}>
                <button className={s.finishBtn}>Result</button>
            </Link>}
            <div className={s.board}>
                {
                    board.map(item => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} isActive minimize />
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    onClickCard={(card) => setChooseCard(card)}
                    cards={player2}/>
            </div>
        </div>
    );
};

export default BoardPage;
