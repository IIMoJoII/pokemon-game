import React from 'react';
import '../../App.css';

import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout"

import BgImg from '../../img/bgimg.jpg';
import Footer from "../../components/Footer/Footer";

import MenuHeader from "../../components/MenuHeader/MenuHeader";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import db from '../../pokemons.json'


const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return (
        <div className="App">
            <MenuHeader />
            <Header
                title="Header title"
                descr="Header description"
                onClickButton={handleClickButton}
            />
            <Layout
                id="rules"
                title="Rules"
                urlBg={BgImg}>
                <p>In the game two players face off against one another</p>
                <p>Each player has five cards</p>
            </Layout>
            <Layout
                id="cards"
                title="Cards"
                colorTitle="#FEFEFE"
                colorBg={"#202736"}>
                <div className="flex">
                    {
                        (db.pokemons).map((item) => <PokemonCard key={item.id} {...item}/>)
                    }
                </div>
            </Layout>
            <Layout
                id="about"
                title="Full Rules"
                urlBg={BgImg}>
                <p>In the game two players face off against one another, one side playing as "blue", the other
                    as "red" on a 3x3 grid. Each player has five cards in a hand and the aim is to capture the
                    opponent's cards by turning them into the player's own color of red or blue.
                </p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board)
                    must be of the player's card color. To do this, the player must capture cards by placing a card adjacent
                    to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                </p>
                <p>If the rank of the opponent's card is higher than the player's card, the player's card will be captured
                    and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured
                    and changed into the player's color instead.
                </p>
            </Layout>
            <Footer />
        </div>
    );
}

export default HomePage;
