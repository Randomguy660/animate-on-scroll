import styles from './DropDown.module.css';
import { motion } from 'framer-motion';

const DropDownVariants = {
    closed: {
        bottom: 'calc(100vh - 100px)',
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.6,
            ease: [.2,-0.79,.99,.64],
        },
    },
    open: {
        top: '100px',
        opacity: 1,
        transition: {
            type: 'spring',
            sitffness: 600,
            damping: 15,
            duration: 0.8,
        },
    },
}

function DropDown({ state }){

    return(
        <>
            <motion.div className={styles.container}
            variants={DropDownVariants}
            initial='closed'
            animate={state ? 'open' : 'closed'}>

            </motion.div>
        </>
    );
}
export default DropDown;