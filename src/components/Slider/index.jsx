import React, { memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Button, Col, Row } from 'antd';

import styles from './styles.module.scss';
import CardProduct from 'components/CardProduct';

const Slider = memo(({ productList = [], title = '', subTitle = '' }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const renderProductList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <CardProduct product={item} />
          </SwiperSlide>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Row
        className={styles.header}
        justify={'space-between'}
        align={'middle'}
      >
        <Col>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </Col>
        <Col>
          <Button
            ref={navigationPrevRef}
            className={styles.left}
          >
            <div className={styles.longArrow}></div>
          </Button>
          <Button
            ref={navigationNextRef}
            className={styles.right}
          >
            <div className={styles.longArrow}></div>
          </Button>
        </Col>
      </Row>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {renderProductList(productList)}
      </Swiper>
    </div>
  );
});

export default Slider;
