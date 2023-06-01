import React from 'react';
import { Breadcrumb as BreadcrumbAndt } from 'antd';

import styles from './styles.module.scss';

const Breadcrumb = ({ breadCrumbList }) => {
  return (
    <div className={styles.wrapper}>
      <BreadcrumbAndt
        className={styles.breadcrumb}
        separator='>'
        items={breadCrumbList}
      />
    </div>
  );
};

export default Breadcrumb;
