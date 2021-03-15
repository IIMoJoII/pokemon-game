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

}

export default App;
