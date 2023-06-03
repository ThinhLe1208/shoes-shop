import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productThunk } from 'redux/thunks/productThunk';
import { Col, Divider, Row } from 'antd';

import styles from './styles.module.scss';
import Info from './components/Info';
import Slider from 'components/Slider';
import SliderDetail from './components/SliderDetail';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import SaleCaculationHOC from 'HOC/SaleCaculationHOC';

const Detail = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const productById = useSelector((state) => state.product.productById);
  const saleProductList = useSelector((state) => state.product.saleProductList);

  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: productById?.name }];

  console.log('Detail ~ productById:', productById);

  useEffect(() => {
    dispatch(productThunk.getProductById(param.id));
  }, [dispatch, param]);

  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumb breadCrumbList={breadCrumbList} />
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <SliderDetail product={productById} />
          </Col>
          <Col span={12}>
            <SaleCaculationHOC product={productById} saleProductList={saleProductList} Component={Info} />
          </Col>
        </Row>

        <Divider />

        <Slider
          productList={productById.relatedProducts}
          title='You May Also Like'
          saleProductList={saleProductList}
          slidesPerView={4}
        />
      </Container>
    </div>
  );
};

export default Detail;
