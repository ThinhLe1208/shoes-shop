import React, { memo, useEffect, useRef, useState } from 'react';
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

const Slider = memo(({ productList, title = '', subTitle = '' }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const sliderWrapperRef = useRef(null);

  const featureProductList = useSelector((state) => state.product.featureProductList);
  const { favoriteList, isLoadingUsers } = useSelector((state) => state.users);
  const [slidesPerView, setSlidesPerView] = useState(0);

  useEffect(() => {
    // adjust the Slider component according to its offetsetWidth
    const handleResetSlider = () => {
      let newSlidePerView;
      // set amount of slide per view
      if (sliderWrapperRef.current?.offsetWidth < 400) {
        newSlidePerView = 1;
      } else if (sliderWrapperRef.current?.offsetWidth < 768) {
        newSlidePerView = 2;
      } else if (sliderWrapperRef.current?.offsetWidth < 992) {
        newSlidePerView = 3;
      } else {
        newSlidePerView = 4;
      }
      setSlidesPerView(newSlidePerView);
    };

    handleResetSlider();
    window.addEventListener('resize', handleResetSlider);

    return () => {
      window.removeEventListener('resize', handleResetSlider);
    };
  }, []);

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
    <div
      className={styles.wrapper}
      ref={sliderWrapperRef}
    >
      <Row
        className={styles.header}
        justify={'space-between'}
        align={'middle'}
        gutter={[0, 0]}
      >
        <Col span={16}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </Col>
        <Col span={8}>
          <div className={styles.navigationButtons}>
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
          </div>
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
