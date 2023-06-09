import React, { useEffect } from 'react';

import styles from './styles.module.scss';
import { storage } from 'utils/storage';
import { history } from 'utils/history';
import Container from 'components/Container';
import { notifications } from 'utils/notifications';

const Checkout = () => {
  useEffect(() => {
    const isLogin = storage.checkLogin();
    if (!isLogin) {
      notifications.error('You must log in first.');
      history.push('/login');
    }
  }, []);

  return (
    storage.checkLogin() && (
      <div className={styles.wrapper}>
        <Container></Container>
      </div>
    )
  );
};

export default Checkout;
