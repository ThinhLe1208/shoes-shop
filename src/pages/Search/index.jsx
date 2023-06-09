import React, { useEffect } from 'react';
import { Col, Empty, Row } from 'antd';

import styles from './styles.module.scss';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import FilterSidebar from 'pages/Search/components/FilterSidebar';
import SearchBar from 'pages/Search/components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from 'components/CardProduct';
import SaleCaculationHOC from 'HOC/SaleCaculationHOC';
import { productThunk } from 'redux/thunks/productThunk';
import { setSortBy } from 'redux/slices/productSlice';

const Search = () => {
  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Browse' }];

  const { featureProductList, finalResultList, categoryList } = useSelector((state) => state.product);
  const { favoriteList, isLoadingUsers } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // reset all filter list and search list
  useEffect(() => {
    dispatch(productThunk.getAllProductList());
    dispatch(setSortBy('default'));
  }, [dispatch]);

  // get all products according to category
  useEffect(() => {
    categoryList?.forEach((item) => {
      dispatch(productThunk.getProductByCategory(item?.id));
    });
  }, [dispatch, categoryList]);

  const renderResultList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Col
            key={index}
            span={12}
            md={8}
            xl={6}
          >
            <SaleCaculationHOC
              product={item}
              featureProductList={featureProductList}
              favoriteList={favoriteList}
              isLoading={isLoadingUsers}
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
          <Col
            span={0}
            lg={6}
          >
            <FilterSidebar />
          </Col>
          <Col
            span={24}
            lg={18}
          >
            <SearchBar />

            <div className={styles.resultList}>
              {finalResultList?.length ? (
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
                >
                  {renderResultList(finalResultList)}
                </Row>
              ) : (
                <Empty
                  style={{ width: '100%' }}
                  description={<p>Empty</p>}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
