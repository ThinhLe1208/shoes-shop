import React, { useEffect } from 'react';

import styles from './styles.module.scss';
import { storage } from 'utils/storage';
import { toast } from 'react-toastify';
import { history } from 'utils/history';

const Checkout = () => {
  useEffect(() => {
    const isLogin = storage.checkLogin();
    if (!isLogin) {
      toast.error('You must log in first.');
      history.push('/login');
    }
  }, []);

  return storage.checkLogin() && <div>Checkout</div>;
};

export default Checkout;
