import React from 'react';

import styles from './styles.module.scss';
import SignUpForm from 'components/SignUpForm';

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <SignUpForm />
    </div>
  );
};

export default Register;
