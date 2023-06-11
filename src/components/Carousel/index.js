import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';
import NikePath from '../NikePath';
import MainShoe from '../MainShoe';
import Info from '../Info';
import Navigation from '../Navigation';

const Carousel = () => {
    const [show, setShow] = useState(true);
    const delayCarousel = 1;

    return (
        <div className={styles.wrapper}>
            {/* background */}
            <motion.p
                className={styles.backgroundNike}
                initial={{ left: '-100%' }}
                animate={{ left: '50%' }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 2, delay: delayCarousel + 0.6 }}
            >
                NIKE
            </motion.p>

            <NikePath delayCarousel={delayCarousel} />

            {/* Slider */}

            <div className={styles.slider}>
                <div className={styles.infoContainer}>
                    <Info delayCarousel={delayCarousel} />
                </div>

                <div className={styles.mainShoeContainer}>
                    <MainShoe show={show} delayCarousel={delayCarousel} />
                </div>

                <div className={styles.navContainer}>
                    <Navigation />
                    <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
                </div>
            </div>
        </div >
    );
};

export default Carousel
    ;