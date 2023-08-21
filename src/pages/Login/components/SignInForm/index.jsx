import { Button, Divider } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import InputField from 'components/InputField';
import { usersThunk } from 'redux/thunks/usersThunk';
import { ACCESS_TOKEN, USER_LOGIN } from 'utils/constants/settingSystem';
import { history } from 'utils/history';
import { notifications } from 'utils/notifications';
import { storage } from 'utils/storage';
import styles from './styles.module.scss';

const SignInSchema = Yup.object().shape({
  email: Yup.string().required('Please provide email.'),
  password: Yup.string().required('Please provide password.'),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(usersThunk.signIn(values)).unwrap();
        storage.setStorageJson(USER_LOGIN, response);
        storage.setStorageJson(ACCESS_TOKEN, response.accessToken);
        storage.setCookieJson(USER_LOGIN, response, 30);
        notifications.success('Sign in successfully.');
        history.push('/index');
      } catch (err) {
        notifications.error('Failed to sign in.');
      }
    },
  });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <InputField
          label='Email'
          name='email'
          value={values.email}
          error={errors.email}
          touched={touched.email}
          placeholder='Insert email'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Divider />
        <InputField
          label='Password'
          name='password'
          value={values.password}
          error={errors.password}
          touched={touched.password}
          placeholder='Insert password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Divider />
        <Button
          type='primary'
          htmlType='submit'
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
