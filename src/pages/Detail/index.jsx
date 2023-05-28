import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productThunk } from 'redux/thunks/productThunk';
import { Col, Divider, Row } from 'antd';

import styles from './styles.module.scss';
import Media from './components/Media';
import Info from './components/Info';
import Collection from 'components/Slider';

const Detail = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const { productById } = useSelector((state) => state.productSlice);

  console.log('Detail ~ productById:', productById);

  useEffect(() => {
    dispatch(productThunk.getProductById(param.id));
  }, [dispatch, param]);

  return (
    <div className={styles.wrapper}>
      <Row>
        <Col span={12}>
          <Media product={productById} />
        </Col>
        <Col span={12}>
          <Info product={productById} />
        </Col>
      </Row>

      <Divider />

      <h3>You May Also Like</h3>

      <Collection productList={productById.relatedProducts} />
    </div>
  );
};

export default Detail;
