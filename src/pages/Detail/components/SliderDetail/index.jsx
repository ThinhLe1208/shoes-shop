import React, { memo, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './styles.module.scss';
import { Skeleton } from 'antd';

const SliderDetail = memo(({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperList = (
    <>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src={product?.image}
          alt='img'
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src={product?.image}
          alt='img'
          style={{ transform: 'scaleX(-1)' }}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src={product?.image}
          alt='img'
          style={{ transform: 'rotate(90deg)' }}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src={product?.image}
          alt='img'
          style={{ transform: 'rotate(270deg)' }}
        />
      </SwiperSlide>
      {product?.relatedProducts?.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className={styles.swiperSlide}
          >
            <img
              src={item?.image}
              alt='img'
            />
          </SwiperSlide>
        );
      })}
    </>
  );

  return (
    <div className={styles.wrapper}>
      <>
        <Swiper
          style={{
            '--swiper-navigation-color': 'var(--color-secondary)',
            '--swiper-pagination-color': 'var(--color-secondary)',
          }}
          spaceBetween={6}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mainSwiper}
        >
          {swiperList}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.subSwiper}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {swiperList}
        </Swiper>
      </>
    </div>
  );
});

const Loading = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperList = (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <SwiperSlide
              key={index}
              className={styles.swiperSlide}
            >
              <Skeleton.Image
                className={styles.imageSkeleton}
                active
              />
            </SwiperSlide>
          );
        })}
    </>
  );

  return (
    <div className={styles.wrapper}>
      <>
        <Swiper
          style={{
            '--swiper-navigation-color': 'var(--color-secondary)',
            '--swiper-pagination-color': 'var(--color-secondary)',
          }}
          spaceBetween={6}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mainSwiper}
        >
          {swiperList}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.subSwiper}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {swiperList}
        </Swiper>
      </>
    </div>
  );
};

SliderDetail.Loading = Loading;

export default SliderDetail;
