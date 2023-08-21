import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';
import SignInForm from 'pages/Login/components/SignInForm';
import styles from './styles.module.scss';

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
