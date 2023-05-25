import React, { memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Col, Row } from 'antd';

import styles from './styles.module.scss';

const Collection = memo(({ productList = [], title = '', subTitle = '' }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const renderProductList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={item.image} alt='img' />
          </SwiperSlide>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Row className={styles.header} justify={'space-between'} align={'middle'}>
        <Col>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </Col>
        <Col>
          <button ref={navigationPrevRef} className={styles.left}>
            Left
          </button>
          <button ref={navigationNextRef} className={styles.right}>
            Right
          </button>
        </Col>
      </Row>

      <Swiper
        slidesPerView={3}
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
        className='mySwiper'
      >
        {renderProductList(productList)}
      </Swiper>
    </div>
  );
});

export default Collection;
