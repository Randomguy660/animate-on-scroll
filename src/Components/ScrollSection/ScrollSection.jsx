import styles from './ScrollSection.module.css';
import { motion } from 'framer-motion';

function ScrollSection({ title, colour }){

    document.title = 'Animate on scroll';

    return(
        <div className={styles.scrollSection} style={{ backgroundColor: colour }}>
            <motion.h1
            initial={{
                opacity: 0,
                x: '-50px',
            }}
            whileInView={{
                opacity: 1,
                x: '0px',
                margin: '20px 0px 0px 0px',
            }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
                delay: 0.25,
            }}>{title}</motion.h1>
        </div>
    );
}
export default ScrollSection;