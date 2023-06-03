import React from 'react';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Banner1 = () => {
  return (
    <div className={styles.wrapper}>
      <Link to='/search'>
        <img className={styles.image} src={require('../../assets/images/banner_1.png')} alt='banner_1' />
        <div className={styles.content}>
          <h3>THE BEST COLLECTIONS</h3>
          <h2>Leather Shoes Collection</h2>
          <p>30% Off Sale</p>
        </div>
      </Link>
    </div>
  );
};

export default Banner1;
