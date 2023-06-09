import React, { useEffect, useState } from 'react';
import { Col, Collapse, Empty, Row } from 'antd';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import SaleCaculationHOC from 'HOC/SaleCaculationHOC';
import CardProduct from 'components/CardProduct';

const { Panel } = Collapse;

const UserFavorite = () => {
  const { favoriteList, isLoadingUsers } = useSelector((state) => state.users);
  const { allProductList, featureProductList } = useSelector((state) => state.product);

  const [detailFavoriteList, setDetailFavoriteList] = useState([]);

  useEffect(() => {
    let detailList = [];
    favoriteList?.forEach((favorItem) => {
      const item = allProductList?.find((detailItem) => detailItem?.id === favorItem?.id);
      if (item) {
        detailList.push(item);
      }
    });
    setDetailFavoriteList(detailList);
  }, [favoriteList, allProductList]);

  const renderFavoriteList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Col
            key={index}
            span={12}
            md={8}
            lg={6}
          >
            <SaleCaculationHOC
              product={item}
              featureProductList={featureProductList}
              Component={CardProduct}
              favoriteList={favoriteList}
              isLoading={isLoadingUsers}
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
              gutter={[
                {
                  lg: 40,
                  md: 32,
                  sm: 24,
                  xs: 10,
                },
                58,
              ]}
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
