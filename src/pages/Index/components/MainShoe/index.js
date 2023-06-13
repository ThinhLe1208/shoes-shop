import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';
import ShootingStar from '../ShootingStar';
import SubShoe from '../SubShoe';

const variants = {
    visible: { opacity: 1 },
    hidden: {
        rotate: [0, -10, 20],
        y: -40,
        x: '100vw',
        transition: {
            x: {
                duration: 2,
                type: 'spring',
                delay: 0.7,
            },
            rotate: {
                duration: 1.4,
                delay: 0.2,
                times: [0, 0.1, 1]
            }
        }
    },
};

const MainShoe = ({ product, delayCarousel }) => {
    console.log('render MainShoe');
    return (
        <AnimatePresence>
            <motion.div
                className={styles.wrapper}
                key={product?.id}
                initial={{
                    x: '100vw',
                }}
                animate={{
                    x: '0vw',
                }}
                transition={{
                    duration: 2,
                    type: 'spring',
                    delay: delayCarousel + 0.6
                }}
            >
                <motion.img
                    className={styles.mainImg}
                    src={product?.image}
                    animate={{
                        rotate: [0, -10, 0],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                        filter: [`drop-shadow(-38px -12px 40px ${product?.color})`, `drop-shadow(24px 32px 100px ${product?.color})`, `drop-shadow(-52px 0px 80px ${product?.color})`, `drop-shadow(-38px -12px 40px ${product?.color})`]
                    }}
                    transition={{
                        rotate: {
                            duration: 1,
                            ease: 'easeIn',
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1]
                        },
                        x: {
                            duration: 3,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1],
                            repeatDelay: 0,
                            repeat: Infinity,
                        },
                        y: {
                            duration: 3,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1],
                            repeatDelay: 0,
                            repeat: Infinity,
                        },
                        filter: {
                            duration: 5,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 0.75, 1],
                            repeatDelay: 0,
                            repeat: Infinity,
                        },
                    }}
                    exit='hidden'
                    variants={variants}
                />

                <motion.div
                    className={styles.shadow}
                    animate={{
                        scale: [1, 0.8, 1],
                        x: '-50%'
                    }}
                    transition={{
                        scale: {
                            duration: 3,
                            delay: delayCarousel + 0.8,
                            times: [0, 0.5, 1],
                            repeatDelay: 0,
                            repeat: Infinity,
                        }
                    }}
                    exit={{
                        x: '100vw',
                        transition: {
                            duration: 2,
                            delay: 0.7,
                            type: 'spring',
                        }
                    }}
                ></motion.div>

                <motion.div
                    className={styles.shootingStar1}
                >
                    <ShootingStar
                        delay={3}
                        product={product}
                    />
                </motion.div>
                <motion.div
                    className={styles.shootingStar2}
                >
                    <ShootingStar
                        delay={2.8}
                        product={product}
                    />
                </motion.div>
                <motion.div
                    className={styles.shootingStar3}
                >
                    <ShootingStar
                        delay={2.4}
                        product={product}
                    />
                </motion.div>

                <motion.div className={styles.subShoe} >
                    <SubShoe product={product} delayCarousel={delayCarousel} />
                </motion.div>

            </motion.div>
        </AnimatePresence>
    );
};

export default MainShoe;
