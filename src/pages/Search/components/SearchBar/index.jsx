import React from 'react';
import { Col, Input, Row, Select } from 'antd';

import styles from './styles.module.scss';

const { Search } = Input;

const SearchBar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.wrapper}>
      <Row justify={'space-between'} align={'middle'}>
        <Col>
          <Search placeholder='input search loading default' loading />
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
                value: 'title-ascending',
                label: 'Alphabetically: A-Z',
              },
              {
                value: 'title-descending',
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
