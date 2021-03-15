import s from './style.module.css'
import cn from 'classnames';

export const Menu = ({menuActive}) => {
    return (
        <div>
            <div className={cn(s.menuContainer, menuActive ? s.active : s.deactive)}>
                <div className={s.overlay}/>
                <div className="menuItems">
                    <ul>
                        <li>
                            <a href="#welcome">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#game">
                                GAME
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu
