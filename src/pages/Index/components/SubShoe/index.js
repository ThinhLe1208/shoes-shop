import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const SubShoe = ({ product, delayCarousel }) => {
    const staggerChildren = 0.2;
    const delaySub = 1.4;
    const exitDur = 0.3;

    const bgContainer = {
        show: {
            transition: {
                delayChildren: delayCarousel + delaySub,
                staggerChildren: staggerChildren,
            },
        },
        hidden: {
            transition: {
                delayChildren: 0.1,
                staggerChildren: staggerChildren,
            },
        }
    };

    const bgItem = {
        show: {
            scaleX: 1,
            background: product?.background,
            transition: {
                duration: 0.4
            }
        },
        hidden: {
            scaleX: 0,
            transition: {
                duration: exitDur
            }
        },
    };

    return (
        <motion.div className={styles.wrapper}>
            <motion.div className={styles.images}>
                <div className={styles.imgContainer}>

                    <motion.img
                        className={styles.image}
                        src={product?.subShoeList[0]?.image}
                        alt='img'
                        initial={{
                            opacity: 0,
                            x: '100%'
                        }}
                        animate={{
                            opacity: 1,
                            x: '50%'
                        }}
                        transition={{
                            x: { type: 'spring' },
                            delay: delayCarousel + staggerChildren * 0 + delaySub,
                            duration: 0.4
                        }}
                        exit={{
                            opacity: 0,
                            x: '100%',
                            transition: {
                                delay: staggerChildren * 0,
                                duration: exitDur
                            }
                        }}
                    ></motion.img>
                </div>

                <div className={styles.imgContainer}>
                    <motion.img
                        className={styles.image}
                        src={product?.subShoeList[1]?.image}
                        alt='img'
                        initial={{
                            opacity: 0,
                            x: '40%'
                        }}
                        animate={{
                            opacity: 1,
                            x: '-10%'
                        }}
                        transition={{
                            delay: delayCarousel + staggerChildren * 1 + delaySub,
                            duration: 0.4
                        }}
                        exit={{
                            opacity: 0,
                            x: '40%',
                            transition: {
                                delay: staggerChildren * 1,
                                duration: exitDur
                            }
                        }}
                    ></motion.img>
                </div>

                <div className={styles.imgContainer}>
                    <motion.img
                        className={styles.image}
                        src={product?.subShoeList[2]?.image}
                        alt='img'
                        initial={{
                            opacity: 0,
                            x: '-40%'
                        }}
                        animate={{
                            opacity: 1,
                            x: '-90%'
                        }}
                        transition={{
                            delay: delayCarousel + staggerChildren * 2 + delaySub,
                            duration: 0.4
                        }}
                        exit={{
                            opacity: 0,
                            x: '-40%',
                            transition: {
                                delay: staggerChildren * 2,
                                duration: exitDur
                            }
                        }}
                    ></motion.img>
                </div>
            </motion.div>

            <motion.div
                className={styles.backgrounds}
                variants={bgContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <motion.div
                    className={styles.background}
                    variants={bgItem}
                ></motion.div>
                <motion.div
                    className={styles.background}
                    variants={bgItem}
                ></motion.div>
                <motion.div
                    className={styles.background}
                    variants={bgItem}
                ></motion.div>
            </motion.div >
        </motion.div >
    );
};

export default SubShoe;

