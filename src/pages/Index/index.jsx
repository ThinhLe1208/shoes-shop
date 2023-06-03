import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import Carousel from 'components/Carousel';
import Collection from 'components/Slider';
import Container from 'components/Container';
import Banner1 from 'components/Banner1';
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
      <Carousel />

      <div className={styles.container}>
        <Container>
          <Row gutter={[32, 32]}>
            <Col span={13}>
              <Banner1 />
            </Col>
            <Col span={11}>
              <Collection
                productList={saleProductList}
                saleProductList={saleProductList}
                title='Best Sale'
                subTitle='Products'
                slidesPerView={2}
              />
            </Col>
          </Row>
          <Collection
            productList={productByCategoryList[NIKE_CATEGORY_ID]}
            saleProductList={saleProductList}
            title='Nike Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
          <Collection
            productList={productByCategoryList[ADIDAS_CATEGORY_ID]}
            saleProductList={saleProductList}
            title='Adidas Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
          <Collection
            productList={productByCategoryList[VANS_CONVERSE_CATEGORY_ID]}
            saleProductList={saleProductList}
            title='Vans And Converse Shoes'
            subTitle='Collection'
            slidesPerView={4}
          />
        </Container>
      </div>
    </div>
  );
};

export default Index;
