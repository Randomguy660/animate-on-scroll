import styles from './Header.module.css';
import DiamondIcon from '../Diamond/DiamondIcon.jsx';
import BurgerSettings from '../Burger Menu/BurgerSettings.jsx';

function Header(){
    return(
        <div className={styles.container}>
            <DiamondIcon />
            <BurgerSettings />
        </div>
    );
}
export default Header;