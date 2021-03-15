import s from './Header.module.css'

const Header = ({title, descr, onClickButton}) => {
    const handleClick = () => {
        onClickButton && onClickButton('game');
    }

    return(
        <header className={s.root}>
            <div className={s.forest} />
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <button className={s.startBtn} onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;
