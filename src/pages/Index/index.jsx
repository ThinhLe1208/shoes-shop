import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import _ from 'lodash';

import styles from './styles.module.scss';
import Slider from 'components/Slider';
import Container from 'components/Container';
import Banner from 'components/Banner';
import {
  ADIDAS_CATEGORY_ID,
  FEATURE_ID,
  NIKE_CATEGORY_ID,
  VANS_CONVERSE_CATEGORY_ID,
} from 'utils/constants/settingSystem';
import BannerVideo from 'components/BannerVideo';
import { productThunk } from 'redux/thunks/productThunk';
import Carousel from './components/Carousel';
import CameraScroll from './components/CameraScroll';

const Index = () => {
  const productListByCategory = useSelector((state) => state.product.productListByCategory);
  const featureProductList = useSelector((state) => state.product.featureProductList);
  const dispatch = useDispatch();
  const sliedersRef = useRef({});

  // lazy loading all sliders (expect feature slider)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // check to call API of each type of category only once
          if (entry.isIntersecting && !productListByCategory[entry.target?.id]) {
            dispatch(productThunk.getProductByCategory(entry.target?.id));
          }
        });
      }
      // observer function will trigger in range
      // { rootMargin: '-300px' }
    );

    _.forEach(sliedersRef.current, (slider) => observer.observe(slider));

    return () => observer.disconnect();
  }, [dispatch, productListByCategory]);

  // make a list of all slider elements in the Index page
  const handleRef = (target) => {
    if (target) {
      sliedersRef.current[target?.id] = target;
    }
  };

  return (
    <div className={styles.wrapper}>
      <CameraScroll />
      <div className={styles.carousel}>
        <Carousel />
      </div>

      <Container>
        <div className={styles.banner1}>
          <Row gutter={[32, 64]}>
            <Col
              span={24}
              lg={13}
            >
              <Banner
                className={styles.image}
                position='right'
                image='banner_1.png'
                subTitle='THE BEST COLLECTIONS'
                title='Leather Shoes Collection'
                content='30% Off Sale'
                path='/search'
                height='400px'
              />
            </Col>
            <Col
              span={24}
              lg={11}
            >
              <Slider
                productList={featureProductList}
                title='Best Sale'
                subTitle='Products'
                loadingSkeletonType={FEATURE_ID}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <div className={styles.space} />

      <Container>
        <div className={styles.slider}>
          <div
            ref={handleRef}
            id={NIKE_CATEGORY_ID}
          >
            <Slider
              productList={productListByCategory[NIKE_CATEGORY_ID]}
              title='Nike Shoes'
              subTitle='Collection'
              loadingSkeletonType={NIKE_CATEGORY_ID}
            />
          </div>
        </div>
      </Container>

      <div className={styles.space} />

      <Container>
        <div className={styles.banner2}>
          <Banner
            position='middle'
            image='banner_2.png'
            subTitle='THE BEST COLLECTIONS'
            title='Best Collection Of Different Types Of Shoes'
            buttonContent='Discover More'
            buttonType='primary'
            path='/search'
            height='300px'
          />
        </div>
      </Container>

      <div className={styles.space} />

      <Container>
        <div
          className={styles.slider}
          ref={handleRef}
          id={ADIDAS_CATEGORY_ID}
        >
          <Slider
            productList={productListByCategory[ADIDAS_CATEGORY_ID]}
            title='Adidas Shoes'
            subTitle='Collection'
            loadingSkeletonType={ADIDAS_CATEGORY_ID}
          />
        </div>
      </Container>

      <div className={styles.space} />

      <Container>
        <div className={styles.banner3}>
          <Row gutter={[32, 32]}>
            <Col
              span={24}
              lg={15}
            >
              <BannerVideo
                image='banner_3.png'
                height='300px'
              />
            </Col>
            <Col
              span={24}
              lg={9}
            >
              <Banner
                position='left'
                image='banner_4.png'
                subTitle='THE BEST COLLECTIONS'
                title='The Best Offers'
                buttonContent='Shop Now'
                buttonType='default'
                path='/search'
                height='300px'
              />
            </Col>
          </Row>
        </div>
      </Container>

      <div className={styles.space} />

      <Container>
        <div
          className={styles.slider}
          ref={handleRef}
          id={VANS_CONVERSE_CATEGORY_ID}
        >
          <Slider
            productList={productListByCategory[VANS_CONVERSE_CATEGORY_ID]}
            title='Vans And Converse Shoes'
            subTitle='Collection'
            loadingSkeletonType={VANS_CONVERSE_CATEGORY_ID}
          />
        </div>
      </Container>
    </div>
  );
};

export default Index;
