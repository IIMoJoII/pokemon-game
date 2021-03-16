import React from 'react'
import s from './style.module.css'
import cn from 'classnames';

export const NavBar = ({buttonClick}) => {
    const [isActive, setIsActive] = React.useState(false)

    const handleButtonClick = () => {
        buttonClick && buttonClick();
        setIsActive(!isActive);
    }

    return (
        <nav className={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <p className={cn(s.menuButton, { [s.active]: isActive, [s.deactive]: !isActive })}>
                    <span onClick={handleButtonClick}/>
                </p>
            </div>
        </nav>
    )
}

export default NavBar;



