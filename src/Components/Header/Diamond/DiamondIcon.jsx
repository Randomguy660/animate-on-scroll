import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import styles from './DiamondIcon.module.css';

function DiamondIcon(){

    const [svg, animate] = useAnimate();

    const duration = 4;
    const fadeDuration = 0.3;
    const fillFadeDuration = 0.5;
    const repeatDelay = 1;
    const fullPathForSvg = 0.45;

    const startAnimation = async () => {

        animate('path', { strokeOpacity: 0 }, { duration: fadeDuration, ease: 'easeInOut', delay: (duration - fadeDuration) + 0.2 });
        animate('path', { fillOpacity: 0 }, { duration: fillFadeDuration, ease: 'easeInOut', delay: repeatDelay });
        await animate('path', { pathLength: 0 }, { duration: duration, ease: 'easeInOut', delay: repeatDelay });

        animate('path', { strokeOpacity: 1 }, { duration: fadeDuration, ease: 'easeInOut' });
        animate('path', { fillOpacity: 1 }, { duration: fillFadeDuration, ease: 'easeInOut', delay: duration - fadeDuration });
        await animate('path', { pathLength: fullPathForSvg }, { duration: duration, ease: 'easeInOut', delay: repeatDelay });
        
        setTimeout(() => startAnimation(), repeatDelay * 1000);
    }

    useEffect(() => {
        startAnimation();
    }, [])

    return(
        <a href="./">
            <div className={styles.container}>
                <svg ref={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520">
                    <motion.path
                    initial={{
                        pathLength: 0,
                        strokeOpacity: 0,
                        fillOpacity: 0,
                    }}
                    style={{
                        strokeWidth: '10px',
                        stroke: '#4470ff',
                        fill: '#0030cc',
                    }}
                    d="M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 
                        176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 
                        176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 
                        7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 
                        11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 
                        30.4z"/>
                </svg>
            </div>
        </a>
    );
}
export default DiamondIcon;

/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<!--!Font Awesome Free 6.5.1 by @fontawesome - 
https://fontawesome.com License - https://fontawesome.com/license/free 
Copyright 2024 Fonticons, Inc.-->
<path d="M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 
176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 
176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 
7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 
11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 
30.4z"/></svg> */