import React, { memo } from 'react';

import styles from './styles.module.scss';
import Card from 'components/CardProduct';
import { Col, Row } from 'antd';

const Collection = memo(({ productList }) => {
  const renderProductList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Col key={index} span={6}>
            <Card product={item} />
          </Col>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Row gutter={[18, 18]}>{renderProductList(productList)}</Row>
    </div>
  );
});

export default Collection;
