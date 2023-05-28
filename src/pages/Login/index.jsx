import React from 'react';

import styles from './styles.module.scss';
import SignInForm from 'components/SignInForm';

const Login = () => {
  return (
    <div
      className={styles.wrapper}
      style={{ paddingTop: '140px' }}
    >
      <SignInForm />
    </div>
  );
};

export default Login;
