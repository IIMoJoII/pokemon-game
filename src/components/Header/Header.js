import s from './Header.module.css'
import {Link} from "react-router-dom";

const Header = ({title, descr}) => {
    return(
        <header className={s.root}>
            <div className={s.forest} />
            <div className={s.silhouette} />
            <div className={s.moon} />
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <Link to="/game"><button className={s.startBtn}>
                    Start Game
                </button></Link>
            </div>
        </header>
    )
}

export default Header;
