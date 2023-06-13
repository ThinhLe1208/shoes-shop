import React, { memo } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Navigation = memo(({
    handleSetProduct,
    updatedList
}) => {
    console.log('render Navigation');
    const delayAnimateChild = 2;
    const delayExitChild = 0;

    return (
        <motion.div
            className={styles.wrapper}
            initial={{
                opacity: 0,
                x: '100%'
            }}
            animate={{
                opacity: 1,
                x: '-10%',
                scale: [1, 1.1, 1],
            }}
            transition={{
                type: 'spring',
                duration: 0.6,
                delay: 1.8,
                scale: {
                    duration: 5,
                    delay: 0,
                    times: [0, 0.5, 1],
                    repeatDelay: 0,
                    repeat: Infinity,
                }
            }}
            exit={{
                opacity: 0,
                x: '100%',
                transition: {
                    duration: 0.6,
                    delay: 0.4
                }
            }}
        >
            <div className={styles.bgOusite}>
                <div className={styles.border}>
                    <div className={styles.bgInside}>
                    </div>
                </div>
            </div>

            <div className={styles.images}>
                {/* clone start */}
                {/* <motion.div
                            className={styles.imgContainer}
                        >
                            <motion.img
                                className={styles.image}
                                src={updatedList[0]?.navImage}
                                alt="pic"
                            />
                        </motion.div> */}
                {/* main */}
                <motion.div
                    className={styles.imgContainer}
                    onClick={() => handleSetProduct(updatedList[1]?.id)}
                    initial={{
                        transform: 'translate(-50%, -50%) rotate(200deg) translateX(-300%)',
                    }}
                    animate={{
                        transform: 'translate(-50%, -50%) rotate(30deg) translateX(-300%)'
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        bounce: 0.4,
                        delay: delayAnimateChild + 0.2
                    }}
                    exit={{
                        transform: 'translate(-50%, -50%) rotate(200deg) translateX(-300%)',
                        transition: {
                            delay: delayExitChild
                        }
                    }}
                    whileHover={{
                        transform: 'translate(-50%, -50%) rotate(30deg) translateX(-300%) scale(1.2)',
                        transition: {
                            type: 'spring',
                            duration: 0.4
                        }
                    }}
                >
                    <motion.img
                        className={styles.image}
                        src={updatedList[1]?.navImage}
                        alt="pic"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imgContainer}
                    onClick={() => handleSetProduct(updatedList[2]?.id)}
                    initial={{
                        transform: 'translate(-50%, -50%) rotate(200deg) translateX(-300%)',
                    }}
                    animate={{
                        transform: 'translate(-50%, -50%) rotate(0deg) translateX(-300%)'
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        bounce: 0.4,
                        delay: delayAnimateChild + 0.1
                    }}
                    exit={{
                        transform: 'translate(-50%, -50%) rotate(200deg) translateX(-300%)',
                        transition: {
                            delay: delayExitChild + 0.1
                        }
                    }}
                    whileHover={{
                        transform: 'translate(-50%, -50%) rotate(0deg) translateX(-300%) scale(1.2)',
                        transition: {
                            type: 'spring',
                            duration: 0.4
                        }
                    }}
                >
                    <motion.img
                        className={styles.image}
                        src={updatedList[2]?.navImage}
                        alt="pic"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imgContainer}
                    onClick={() => handleSetProduct(updatedList[3]?.id)}
                    initial={{
                        transform: 'translate(-50%, -50%) rotate(200deg) translateX(-300%)',
                    }}
                    animate={{
                        transform: 'translate(-50%, -50%) rotate(-30deg) translateX(-300%)'
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        bounce: 0.4,
                        delay: delayAnimateChild
                    }}
                    exit={{
                        transform: 'translate(-50%, -50%) rotate(200deg) translateX(-300%)',
                        transition: {
                            delay: delayExitChild + 0.2
                        }
                    }}
                    whileHover={{
                        transform: 'translate(-50%, -50%) rotate(-30deg) translateX(-300%) scale(1.2)',
                        transition: {
                            type: 'spring',
                            duration: 0.4
                        }
                    }}
                >
                    <motion.img
                        className={styles.image}
                        src={updatedList[3]?.navImage}
                        alt="pic"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                </motion.div>
                {/* main */}
                {/* clone end */}
                {/* <div className={styles.imgContainer} >
                            <motion.img
                                className={styles.image}
                                src={updatedList[4]?.navImage}
                                alt="pic"
                            />
                        </div> */}
            </div>


        </motion.div>
    );
});

export default Navigation;

