import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const NikePath = ({ delayCarousel }) => {
  const imgRef = useRef();

  // reset .gif file
  useEffect(() => {
    const imgEle = imgRef.current;
    if (imgEle) {
      imgEle.setAttribute('src', require('assets/images/ink.webp'));
    }
    return () => {
      if (imgEle) {
        imgEle.setAttribute('src', '');
      }
    };
  }, []);

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ type: 'spring', duration: 2, delay: delayCarousel }}
    >
      <motion.img
        className={styles.video}
        ref={imgRef}
        src={require('assets/images/ink.webp')}
        alt='blue_ink_gif'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: delayCarousel + 0.2,
          duration: 0,
        }}
      />

      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{
          delay: delayCarousel + 0.2,
          duration: 0,
        }}
      ></motion.div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={1366}
        height={768}
        viewBox='0 0 1366 768'
      >
        <defs>
          <clipPath id='nike'>
            <path
              className='cls-1'
              d='M0,768V460C161.448,827.531,726.537,304.388,900,212L313,768H0Z'
            />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
};

export default NikePath;
