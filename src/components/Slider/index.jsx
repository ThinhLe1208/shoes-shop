import React, { memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Button, Col, Row } from 'antd';

import styles from './styles.module.scss';
import CardProduct from 'components/CardProduct';
import SaleCaculationHOC from 'HOC/SaleCaculationHOC';
import LordIcon from 'components/LordIcon';

const Slider = memo(({ productList, title = '', subTitle = '', slidesPerView = 4 }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const featureProductList = useSelector((state) => state.product.featureProductList);
  const { favoriteList, isLoadingUsers } = useSelector((state) => state.users);

  const renderProductList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <SaleCaculationHOC
              product={item}
              featureProductList={featureProductList}
              favoriteList={favoriteList}
              isLoading={isLoadingUsers}
              Component={CardProduct}
            />
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
            className={styles.leftBtn}
          >
            <LordIcon
              className={styles.lordIcon}
              icon='arrow'
              state='hover-1'
              trigger='click'
            />
          </Button>
          <Button
            ref={navigationNextRef}
            className={styles.rightBtn}
          >
            <LordIcon
              className={styles.lordIcon}
              icon='arrow'
              state='hover-1'
              trigger='click'
            />
          </Button>
        </Col>
      </Row>

      <Swiper
        slidesPerView={slidesPerView}
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
