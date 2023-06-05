import React, { useEffect } from 'react';
import { Col, Row } from 'antd';

import styles from './styles.module.scss';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import FilterSidebar from 'pages/Search/components/FilterSidebar';
import SearchBar from 'pages/Search/components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from 'components/CardProduct';
import SaleCaculationHOC from 'HOC/SaleCaculationHOC';

const Search = () => {
  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'All products' }];

  const dispatch = useDispatch();

  const { productByKeywordList, saleProductList } = useSelector((state) => state.product);
  const { favoriteList, isLoading } = useSelector((state) => state.users);
  console.log('Search ~ productByKeywordList:', productByKeywordList.default);

  const renderResultList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Col
            key={index}
            span={8}
          >
            <SaleCaculationHOC
              product={item}
              saleProductList={saleProductList}
              favoriteList={favoriteList}
              isLoading={isLoading}
              Component={CardProduct}
            />
          </Col>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumb breadCrumbList={breadCrumbList} />

        <Row gutter={16}>
          <Col span={6}>
            <FilterSidebar />
          </Col>
          <Col span={18}>
            <SearchBar />

            <div className={styles.resultList}>
              <Row gutter={[32, 66]}>{renderResultList(productByKeywordList.default)}</Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
