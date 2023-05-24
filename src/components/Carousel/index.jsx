import React, { memo } from 'react';
import { Carousel as CarouselAntd } from 'antd';

import styles from './styles.module.scss';

const Carousel = memo(({ productList }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const renderCaroulselSlides = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <div className={styles.slide} key={index}>
            <img className={styles.img} src={item.image} alt='slide' />
          </div>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <CarouselAntd afterChange={onChange}>{renderCaroulselSlides(productList)}</CarouselAntd>
    </div>
  );
});

export default Carousel;
