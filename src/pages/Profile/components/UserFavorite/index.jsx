import React, { useEffect, useState } from 'react';
import { Col, Collapse, Empty, Row } from 'antd';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import SaleCaculationHOC from 'HOC/SaleCaculationHOC';
import CardProduct from 'components/CardProduct';

const { Panel } = Collapse;

const UserFavorite = () => {
  const { favoriteList, isLoading } = useSelector((state) => state.users);
  const { productByKeywordList, saleProductList } = useSelector((state) => state.product);

  const [detailFavoriteList, setDetailFavoriteList] = useState([]);

  useEffect(() => {
    let detailList = [];
    favoriteList?.forEach((favorItem) => {
      const item = productByKeywordList?.default?.find((detailItem) => detailItem.id === favorItem.id);
      if (item) {
        detailList.push(item);
      }
    });
    setDetailFavoriteList(detailList);
  }, [favoriteList, productByKeywordList]);

  const renderFavoriteList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Col
            key={index}
            span={6}
          >
            <SaleCaculationHOC
              product={item}
              saleProductList={saleProductList}
              Component={CardProduct}
              favoriteList={favoriteList}
              isLoading={isLoading}
            />
          </Col>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Collapse
        defaultActiveKey={[]}
        expandIconPosition='end'
      >
        <Panel
          header={`You liked ${favoriteList?.length ? favoriteList.length : 0} product${
            favoriteList?.length > 1 ? 's' : ''
          }`}
        >
          {favoriteList?.length ? (
            <Row
              gutter={[32, 66]}
              className={styles.pannel}
            >
              {renderFavoriteList(detailFavoriteList)}
            </Row>
          ) : (
            <Empty description={<p>Empty</p>} />
          )}
        </Panel>
      </Collapse>
    </div>
  );
};

export default UserFavorite;
