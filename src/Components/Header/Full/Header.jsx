import styles from './Header.module.css';
import DiamondIcon from '../Diamond/DiamondIcon.jsx';
import BurgerSettings from '../Burger Menu/BurgerSettings.jsx';
import DropDown from '../DropDown/DropDown.jsx';
import { useState } from 'react';

function Header(){

    const [open, setOpen] = useState(false);

    function toggleDropDown(){
        setOpen(o => !o);
    }

    return(
        <>
            <div className={styles.container}>
                <DiamondIcon />
                <BurgerSettings onOpen={toggleDropDown} onClose={toggleDropDown}/>
            </div>
            <div className={styles.dropDown}>
                <DropDown state={open}/>
            </div>
        </>
    );
}
export default Header;