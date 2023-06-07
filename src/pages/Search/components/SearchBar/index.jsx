import React, { useRef, useState } from 'react';
import { Button, Col, Drawer, Input, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import { setSortBy } from 'redux/slices/productSlice';
import LordIcon from 'components/LordIcon';
import FilterSidebar from '../FilterSidebar';

const { Search } = Input;

const SearchBar = () => {
  const { isLoadingProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const contentRef = useRef('');
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleChange = (value) => {
    dispatch(setSortBy(value));
    dispatch(productThunk.searchProductName(contentRef.current));
  };

  const handleSearchDebounce = _.debounce((e) => {
    contentRef.current = e.target.value;
    dispatch(productThunk.searchProductName(e.target.value));
  }, 1000);

  const handleShowDrawer = () => {
    setIsOpenDrawer(true);
  };
  const handleHideDrawer = () => {
    setIsOpenDrawer(false);
  };

  return (
    <div className={styles.wrapper}>
      <Row
        gutter={[16, 16]}
        justify={'space-between'}
        align={'middle'}
      >
        <Col
          order={3}
          md={{ order: 1 }}
        >
          <Search
            placeholder='Search for name'
            loading={isLoadingProduct}
            disabled={isLoadingProduct}
            onInput={handleSearchDebounce}
          />
        </Col>
        <Col
          order={1}
          md={{ order: 2 }}
          lg={0}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '4px' }}>{isOpenDrawer ? 'Hide' : 'Show'} filter :</p>
            <Button
              type='link'
              className={styles.filterButton}
            >
              <LordIcon
                className='lordIcon'
                icon='filter'
                trigger='loop'
                delay='2500'
                state='intro'
                onClick={handleShowDrawer}
              />
            </Button>
          </div>
        </Col>
        <Col
          order={2}
          md={{ order: 3 }}
        >
          <span className={styles.sortLabel}>Sort by :</span>
          <Select
            defaultValue='default'
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

      <Drawer
        className={styles.drawer}
        placement='left'
        closable={false}
        onClose={handleHideDrawer}
        open={isOpenDrawer}
      >
        <Button
          className={styles.closeButton}
          type='link'
          onClick={handleHideDrawer}
        >
          <LordIcon
            className='lordIcon'
            icon='close'
            trigger='loop'
            delay='2000'
            state='hover-1'
          />
        </Button>
        <FilterSidebar />
      </Drawer>
    </div>
  );
};

export default SearchBar;
