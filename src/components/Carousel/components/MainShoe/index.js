import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';
import ShootingStar from '../ShootingStar';
import { globalConstants } from '../../constants/globalConstants';

const MainShoe = ({ show, delayCarousel }) => {

    return (
        <AnimatePresence>
            {/* {show &&  */}
            <motion.div
                className={styles.wrapper}
                initial={{ y: 0 }}
                animate={{
                    x: ['100vw', '0vw'],
                }}
                transition={{
                    x: { duration: 2, type: 'spring', delay: delayCarousel + 0.6 },
                }}
            >
                <motion.img
                    className={styles.mainImg}
                    src={require('../../assets/images/main_pink.png')}
                    animate={{
                        rotate: [0, -10, 0],
                        translateX: [0, 30, 0],
                        translateY: [0, -30, 0],
                    }}
                    transition={{
                        rotate: {
                            duration: 1,
                            ease: 'easeIn',
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1]
                        },
                        translateX: {
                            duration: 3,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1],
                            repeatDelay: 0.2,
                            repeat: Infinity,
                        },
                        translateY: {
                            duration: 3,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1],
                            repeatDelay: 0.2,
                            repeat: Infinity,
                        },
                    }}
                />

                <div className={styles.shootingStar1}>
                    <ShootingStar
                        delay={3.2}
                        show={show}
                        boxShadow={globalConstants.shootingStarShadow1}
                        backgroundDot={globalConstants.shootingStarBgDot1}
                        backgroundLine={globalConstants.shootingStarBgLine1}
                    />
                </div>
                <div className={styles.shootingStar2}>
                    <ShootingStar
                        delay={3}
                        show={show}
                        boxShadow={globalConstants.shootingStarShadow1}
                        backgroundDot={globalConstants.shootingStarBgDot1}
                        backgroundLine={globalConstants.shootingStarBgLine1}
                    />
                </div>
                <div className={styles.shootingStar3}>
                    <ShootingStar
                        delay={2.6}
                        show={show}
                        boxShadow={globalConstants.shootingStarShadow2}
                        backgroundDot={globalConstants.shootingStarBgDot2}
                        backgroundLine={globalConstants.shootingStarBgLine2}
                    />
                </div>

                <motion.div
                    className={styles.shadow}
                    animate={{
                        scale: [1, 0.8, 1],
                        translateX: '-50%'
                    }}
                    transition={{
                        scale: {
                            duration: 3,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.4, 1],
                            repeatDelay: 0.2,
                            repeat: Infinity,
                        }
                    }}
                ></motion.div>
            </motion.div>
            {/* } */}
        </AnimatePresence>
    );
};

export default MainShoe;
