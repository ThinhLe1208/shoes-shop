import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';

const Info = ({ product, delayCarousel }) => {
    const staggerChildren = 0.1;

    return (
        <AnimatePresence>
            <motion.div
                className={styles.wrapper}
                key={product?.id}
            >
                <motion.h1
                    className={styles.title}
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 0,
                        duration: 1
                    }}
                    exit={{
                        x: -1000,
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 0,
                            duration: 1
                        }
                    }}
                >
                    {product?.brand}
                    {' '}
                    <span
                        className={styles.secondTitle}
                        style={{
                            color: product?.color
                        }}
                    >
                        {product?.name}
                    </span>
                </motion.h1>
                <motion.h2
                    className={styles.subTitle}
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 1,
                        duration: 1
                    }}
                    exit={{
                        x: -1000,
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 1,
                            duration: 1
                        }
                    }}
                >
                    {product?.subName}
                </motion.h2>

                <motion.p
                    className={styles.price}
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 2,
                        duration: 1
                    }}
                    exit={{
                        x: -1000,
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 2,
                            duration: 1
                        }
                    }}
                >
                    <span className={styles.currency}>$</span>
                    <span>{product?.price}</span>
                </motion.p>

                <motion.p
                    className={styles.colorLabel}
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 3,
                        duration: 1
                    }}
                    exit={{
                        x: -1000,
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 3,
                            duration: 1
                        }
                    }}
                >
                    Color
                </motion.p>
                <motion.div
                    className={styles.colorList}
                >
                    <motion.div
                        className={styles.colorItem}
                        initial={{
                            x: -1000
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            type: 'spring',
                            delay: 1.6 + staggerChildren * 4,
                            duration: 1
                        }}
                        exit={{
                            x: -1000,
                            transition: {
                                type: 'spring',
                                delay: staggerChildren * 4,
                                duration: 1
                            }
                        }}
                    >
                    </motion.div>
                    <motion.div
                        className={styles.colorItem}
                        initial={{
                            x: -1000
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            type: 'spring',
                            delay: 1.6 + staggerChildren * 5,
                            duration: 1
                        }}
                        exit={{
                            x: -1000,
                            transition: {
                                type: 'spring',
                                delay: staggerChildren * 5,
                                duration: 1
                            }
                        }}
                    >
                    </motion.div>
                    <motion.div
                        className={styles.colorItem}
                        initial={{
                            x: -1000
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            type: 'spring',
                            delay: 1.6 + staggerChildren * 6,
                            duration: 1
                        }}
                        exit={{
                            x: -1000,
                            transition: {
                                type: 'spring',
                                delay: staggerChildren * 6,
                                duration: 1
                            }
                        }}
                    >
                    </motion.div>
                    <motion.div
                        className={styles.colorItem}
                        initial={{
                            x: -1000
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            type: 'spring',
                            delay: 1.6 + staggerChildren * 7,
                            duration: 1
                        }}
                        exit={{
                            x: -1000,
                            transition: {
                                type: 'spring',
                                delay: staggerChildren * 7,
                                duration: 1
                            }
                        }}
                    >
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.sizeContainer}
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 8,
                        duration: 1
                    }}
                    exit={{
                        x: -1000,
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 8,
                            duration: 1
                        }
                    }}
                >
                    <p className={styles.sizeLabel}>Size</p>
                    <div className={styles.sizeNumbers}>
                        <div className={styles.sizeItem + ' ' + styles.active}>7</div>
                        <div className={styles.sizeItem}>7.5</div>
                        <div className={styles.sizeItem}>8</div>
                        <div className={styles.sizeItem}>8.5</div>
                        <div className={styles.sizeItem}>8</div>
                    </div>
                </motion.div>

                <motion.button
                    className={styles.button}
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        x: {
                            type: 'spring',
                            delay: 1.6 + staggerChildren * 9,
                            duration: 1
                        },
                        scale: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        }
                    }}
                    exit={{
                        x: -1000,
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 9,
                            duration: 1
                        }
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    BUY
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Info;
