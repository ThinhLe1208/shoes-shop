import React from 'react';

import styles from './styles.module.scss';
import SignUpForm from 'pages/Register/components/SignUpForm';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';

const Register = () => {
  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Register' }];

  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumb breadCrumbList={breadCrumbList} />
        <h1 className={styles.heading}>Create Account</h1>
        <SignUpForm />
      </Container>
    </div>
  );
};

export default Register;
