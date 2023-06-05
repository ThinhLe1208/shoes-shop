import React, { useEffect } from 'react';
import { Button, Space } from 'antd';

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

  const handleChangeThem = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    storage.checkLogin() && (
      <div className={styles.wrapper}>
        <Container>
          <Space>
            <Button onClick={() => handleChangeThem('red')}>Red</Button>
            <Button onClick={() => handleChangeThem('blue')}>Blue</Button>
          </Space>
        </Container>
      </div>
    )
  );
};

export default Checkout;
