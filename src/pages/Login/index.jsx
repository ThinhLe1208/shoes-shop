import React from 'react';

import styles from './styles.module.scss';
import SignInForm from 'components/SignInForm';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';

const Login = () => {
  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Login' }];

  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumb breadCrumbList={breadCrumbList} />
        <h1 className={styles.heading}>Already Registered?</h1>
        <SignInForm />
      </Container>
    </div>
  );
};

export default Login;
