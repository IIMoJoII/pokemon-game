<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";

import BgImg from './img/bgimg.jpg'
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Header title={"Header title"} descr={"Header description"}/>
      <Layout title={"Layout title"} descr={"Layout description"} urlBg={BgImg} />
      <Layout title={"Layout title"} descr={"Layout description"} colorBg={"#e2e2e2"} />
      <Layout title={"Layout title"} descr={"Layout description"} urlBg={BgImg} />
      <Footer />
    </div>
  );
=======
import { useState } from 'react';
import HomePage from "./routs/Home";
import GamePage from "./routs/Game";

function App() {
    const [page, setPage] = useState('app');

    const handleChangePage = (page) => {
        setPage(page);
    }

    switch (page){
        case "app":
            return <HomePage onChangePage={handleChangePage}/>
        case "game":
            return <GamePage onClickButton={handleChangePage}/>
        default:
            return <HomePage onChangePage={handleChangePage}/>
    }
>>>>>>> Stashed changes
}

export default App;
