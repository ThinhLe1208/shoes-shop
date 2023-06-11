import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';

const ShootingStar = ({
    show,
    delay,
    boxShadow,
    backgroundDot,
    backgroundLine,
}) => {
    return (
        <AnimatePresence>
            {show && <motion.div
                className={styles.wrapper}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.4,
                    delay: delay
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        delay: 0
                    }
                }}
            >
                <motion.div
                    className={styles.dot}
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{
                        opacity: {
                            duration: 0.4,
                            delay: delay + 0.6
                        },
                    }}
                    style={{
                        '--bg-dot': backgroundDot,
                        '--shadow-dot': boxShadow
                    }}
                />

                <motion.div
                    className={styles.line}
                    animate={{
                        scaleX: [0.4, 1],
                    }}
                    transition={{
                        scaleX: {
                            duration: 0.8,
                            type: 'spring',
                            delay: delay + 0.3
                        }
                    }}
                    // not work with framer motion
                    style={{
                        '--bg-line': backgroundLine
                    }}
                />
            </motion.div >}
        </AnimatePresence>
    );
};

export default ShootingStar;

