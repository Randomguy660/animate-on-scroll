import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import styles from './BurgerSettings.module.css';

function BurgerSettings(){

    const transitionTime = 0.2;

    const [burger, animateBurger] = useAnimate();

    //! False means closed ( looks like a burger )
    //! True means open ( doesn't look like a burger )
    const [state, setState] = useState(false);

    const openBurger = async () => {
        await animateBurger('*', { y: '0%' }, { duration: transitionTime, ease: 'easeInOut' });

        animateBurger('span:nth-child(2)', { opacity: 0 }, { duration: 0 });
        animateBurger('*', { width: '30px' }, { duration: transitionTime * 2, ease: 'easeInOut' });
        animateBurger('span:nth-child(1)', { x: '-47%' }, { duration: transitionTime, ease: 'easeInOut' });
        await animateBurger('span:nth-child(3)', { x: '47%' }, { duration: transitionTime, ease: 'easeInOut' });

        animateBurger('span:nth-child(1)', { rotate: '45deg' }, { duration: transitionTime, ease: 'easeInOut' });
        animateBurger('span:nth-child(3)', { rotate: '-45deg' }, { duration: transitionTime, ease: 'easeInOut' });
        await animateBurger('*', { y: '500%' }, {duration: transitionTime, ease: 'easeInOut' });
    }

    const closeBurger = async () => {
        animateBurger('*', { y: '0%' }, { duration: transitionTime, ease: 'easeInOut' });
        await animateBurger('*', { rotate: '0deg' }, { duration: transitionTime, ease: 'easeInOut' });

        animateBurger('*', { width: '60px' }, { duration: transitionTime * 2, ease: 'easeInOut' });
        await animateBurger('*', { x: '0%' }, { duration: transitionTime, ease: 'easeInOut' });

        animateBurger('span:nth-child(2)', { opacity: 1 }, { duration: 0 });
        animateBurger('span:nth-child(1)', { y: '-300%' }, { duration: transitionTime, ease: 'easeInOut' });
        await animateBurger('span:nth-child(3)', { y: '300%' }, { duration: transitionTime, ease: 'easeInOut' });
    }

    function toggleBurger(){
        //? useState functions are asynchronous so do this to make sure the variable is changed straight away
        //! If you need 'state' right after then use 'newState'
        setState(s => {
            const newState = !s;
            newState ? openBurger() : closeBurger();
            return newState;
        });
    }

    return(
        <div ref={burger} className={styles.container}
        onClick={toggleBurger}>
            <motion.span className={styles.bar}
            style={{
                position: 'absolute',
                y: '-300%',
                x: '0%',
                transformOrigin: 'right',
            }}></motion.span>
            <motion.span className={styles.bar}
            style={{
                position: 'absolute',
                y: '0%',
                x: '0%',
            }}></motion.span>
            <motion.span className={styles.bar}
            style={{
                position: 'absolute',
                y: '300%',
                x: '0%',
                transformOrigin: 'left',
            }}></motion.span>
        </div>
    );
}
export default BurgerSettings;