import {useState} from 'react'
import NavBar from "../NavBar";
import Menu from "../Menu";
import s from './MenuHeader.module.css'

export const MenuHeader = () => {
    const [isActive, setIsActive] = useState(false);
    const handleButtonClick = () => {
        setIsActive(!isActive);
    }

    return (
       <div className={s.menu_header}>
            <NavBar buttonClick={handleButtonClick}/>
            <Menu menuActive={isActive}/>
       </div>
    );
}

export default MenuHeader

