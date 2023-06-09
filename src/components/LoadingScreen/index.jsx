import React from 'react';

import styles from './styles.module.scss';

const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          id='Nike'
          width={80}
          height={80}
        >
          <path
            fill='var(--color-primary)'
            fillRule='evenodd'
            d='m7.998 7.567-2.758.722c-.974.241-1.826.562-2.647.281-1.116-.482-1.096-1.736-.264-3.07-1.471 1.214-4.118 5.096-.538 5.488.456.06 1.268-.1 2.15-.471l4.057-1.665L16 5.58 8.992 7.306l-.994.261z'
            clipRule='evenodd'
            className='color1d1d1b svgShape'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
