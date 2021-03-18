import s from './style.module.css'
import cn from 'classnames';
import {Link} from "react-router-dom";

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACT',
        to: '/contact',
    }
]


export const Menu = ({menuIsActive}) => {


    return (
        <div>
            <div className={cn(s.menuContainer, { [s.active]: menuIsActive, [s.deactive]: !menuIsActive })}>
                <div className={s.overlay}/>
                <div className="menuItems">
                    <ul>
                        {MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <div onClick={menuIsActive}>
                                    <Link to={to}>
                                        {title}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu
