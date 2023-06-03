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

const SliderDetail = memo(({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperList = (
    <>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={product?.image} alt='img' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={product?.image} alt='img' style={{ transform: 'scaleX(-1)' }} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={product?.image} alt='img' style={{ transform: 'rotate(90deg)' }} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={product?.image} alt='img' style={{ transform: 'rotate(270deg)' }} />
      </SwiperSlide>
      {product?.relatedProducts?.map((item, index) => {
        return (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={item?.image} alt='img' />
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
            '--swiper-navigation-color': 'var(--color-primary)',
            '--swiper-pagination-color': 'var(--color-primary)',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mainSwiper}
        >
          {swiperList}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.subSwiper}
        >
          {swiperList}
        </Swiper>
      </>
    </div>
  );
});

export default SliderDetail;
