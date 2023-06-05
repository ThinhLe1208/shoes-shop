import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import styles from './styles.module.scss';
import Carousel from 'components/Carousel';
import Slider from 'components/Slider';
import Container from 'components/Container';
import Banner from 'components/Banner';
import { ADIDAS_CATEGORY_ID, NIKE_CATEGORY_ID, VANS_CONVERSE_CATEGORY_ID } from 'utils/constants/settingSystem';
import BannerVideo from 'components/BannerVideo';

const Index = () => {
  const productByCategoryList = useSelector((state) => state.product.productByCategoryList);
  const saleProductList = useSelector((state) => state.product.saleProductList);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <Carousel />
      </div>

      <Container>
        <div className={styles.banner1}>
          <Row gutter={[32, 32]}>
            <Col span={13}>
              <Banner
                className={styles.image}
                position='right'
                image='banner_1.png'
                subTitle='THE BEST COLLECTIONS'
                title='Leather Shoes Collection'
                content='30% Off Sale'
                path='/search'
              />
            </Col>
            <Col span={11}>
              <Slider
                productList={saleProductList}
                title='Best Sale'
                subTitle='Products'
                slidesPerView={2}
              />
            </Col>
          </Row>
        </div>

        <div className={styles.slider}>
          <Slider
            productList={productByCategoryList[NIKE_CATEGORY_ID]}
            title='Nike Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
        </div>

        <div className={styles.banner2}>
          <Banner
            position='middle'
            image='banner_2.png'
            subTitle='THE BEST COLLECTIONS'
            title='Best Collection Of Different Types Of Shoes'
            buttonContent='Discover More'
            buttonType='primary'
            path='/search'
          />
        </div>

        <div className={styles.slider}>
          <Slider
            productList={productByCategoryList[ADIDAS_CATEGORY_ID]}
            title='Adidas Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
        </div>

        <div className={styles.banner3}>
          <Row gutter={[32, 32]}>
            <Col span={15}>
              <BannerVideo image='banner_3.png' />
            </Col>
            <Col span={9}>
              <Banner
                position='left'
                image='banner_4.png'
                subTitle='THE BEST COLLECTIONS'
                title='The Best Offers'
                buttonContent='Shop Now'
                buttonType='default'
                path='/search'
              />
            </Col>
          </Row>
        </div>

        <div className={styles.slider}>
          <Slider
            productList={productByCategoryList[VANS_CONVERSE_CATEGORY_ID]}
            title='Vans And Converse Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
        </div>
      </Container>
    </div>
  );
};

export default Index;
