import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const NikePath = ({ delayCarousel }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ type: 'spring', duration: 2, delay: delayCarousel }}
            className={styles.wrapper}>

            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delayCarousel }}
                className={styles.video}
                src={require('../../assets/images/blue_ink.gif')}
                alt="blue_ink_gif"
            />

            <div className={styles.overlay}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width={1366} height={768} viewBox="0 0 1366 768">
                <defs>
                    <clipPath id='nike'  >
                        <path className="cls-1" d="M0,768V460C161.448,827.531,726.537,304.388,900,212L313,768H0Z" />
                    </clipPath>
                </defs>
            </svg>
        </ motion.div>
    );
};

export default NikePath;