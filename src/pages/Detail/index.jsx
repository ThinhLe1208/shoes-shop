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
import { DETAIL_ID } from 'utils/constants/settingSystem';

const Detail = () => {
  const productById = useSelector((state) => state.product.productById);
  const featureProductList = useSelector((state) => state.product.featureProductList);
  const hideLoadingSkeleton = useSelector((state) => state.ui.hideLoadingSkeleton);
  const param = useParams();
  const dispatch = useDispatch();

  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: productById?.name }];

  useEffect(() => {
    dispatch(productThunk.getProductById(param?.id));
  }, [dispatch, param]);

  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumb breadCrumbList={breadCrumbList} />

        <Row gutter={[32, 32]}>
          <Col
            span={24}
            md={12}
          >
            {!hideLoadingSkeleton?.[DETAIL_ID] && <SliderDetail.Loading />}
            {hideLoadingSkeleton?.[DETAIL_ID] && <SliderDetail product={productById} />}
          </Col>
          <Col
            span={24}
            md={12}
          >
            <SaleCaculationHOC
              product={productById}
              featureProductList={featureProductList}
              Component={hideLoadingSkeleton?.[DETAIL_ID] ? Info : Info.Loading}
            />
          </Col>
        </Row>

        <Divider />

        <Slider
          productList={productById?.relatedProducts}
          subTitle='You May Also Like'
          loadingSkeletonType={DETAIL_ID}
        />
      </Container>
    </div>
  );
};

export default Detail;
