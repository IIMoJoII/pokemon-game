import s from './style.module.css'
import cn from 'classnames';

export const NavBar = ({buttonClick}) => {
    const handleButtonClick = () => {
        buttonClick && buttonClick();
    }

    return (
        <nav className={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <p className={cn(s.menuButton, s.active)}>
                    <span onClick={handleButtonClick}/>
                </p>
            </div>
        </nav>
    )
}

export default NavBar;



