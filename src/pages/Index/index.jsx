import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import Carousel from 'components/Carousel';
import Slider from 'components/Slider';
import Container from 'components/Container';
import Banner from 'components/Banner';
import { ADIDAS_CATEGORY_ID, NIKE_CATEGORY_ID, VANS_CONVERSE_CATEGORY_ID } from 'utils/constants/settingSystem';

const Index = () => {
  const dispatch = useDispatch();
  const productByCategoryList = useSelector((state) => state.product.productByCategoryList);
  const saleProductList = useSelector((state) => state.product.saleProductList);

  useEffect(() => {
    dispatch(productThunk.getProductByCategory(NIKE_CATEGORY_ID));
    dispatch(productThunk.getProductByCategory(ADIDAS_CATEGORY_ID));
    dispatch(productThunk.getProductByCategory(VANS_CONVERSE_CATEGORY_ID));
  }, [dispatch]);

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
                saleProductList={saleProductList}
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
            saleProductList={saleProductList}
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
            saleProductList={saleProductList}
            title='Adidas Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
        </div>

        <div className={styles.banner3}>
          <Row gutter={[32, 32]}>
            <Col span={15}>
              <Banner position='middle' image='banner_3.png' path='/search' video={true} />
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
            saleProductList={saleProductList}
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
