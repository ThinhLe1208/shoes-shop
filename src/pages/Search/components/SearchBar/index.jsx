import React, { useRef } from 'react';
import { Col, Input, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import { setSortBy } from 'redux/slices/productSlice';

const { Search } = Input;

const SearchBar = () => {
  const { isLoadingProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const contentRef = useRef('');

  const handleChange = (value) => {
    dispatch(setSortBy(value));
    dispatch(productThunk.searchProductName(contentRef.current));
  };

  const handleSearchDebounce = _.debounce((e) => {
    contentRef.current = e.target.value;
    dispatch(productThunk.searchProductName(e.target.value));
  }, 1000);

  return (
    <div className={styles.wrapper}>
      <Row
        justify={'space-between'}
        align={'middle'}
      >
        <Col>
          <Search
            placeholder='Search for name'
            loading={isLoadingProduct}
            disabled={isLoadingProduct}
            onInput={handleSearchDebounce}
          />
        </Col>
        <Col>
          <span className={styles.sortLabel}>Sort by :</span>
          <Select
            defaultValue='Default'
            style={{
              minWidth: 180,
            }}
            popupMatchSelectWidth={true}
            onChange={handleChange}
            options={[
              {
                value: 'default',
                label: 'Default',
              },
              {
                value: 'name-ascending',
                label: 'Alphabetically: A-Z',
              },
              {
                value: 'name-descending',
                label: 'Alphabetically: Z-A',
              },
              {
                value: 'price-ascending',
                label: 'Price: low to high',
              },
              {
                value: 'price-descending',
                label: 'Price: high to low',
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
