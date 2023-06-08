import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider, Space, Spin } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './styles.module.scss';
import InputField from 'components/InputField';
import { usersThunk } from 'redux/thunks/usersThunk';
import { notifications } from 'utils/notifications';
import { storage } from 'utils/storage';
import { ACCESS_TOKEN, USER_LOGIN } from 'utils/constants/settingSystem';
import { history } from 'utils/history';
import SocialButton from 'components/SocialButton';

const SignInSchema = Yup.object().shape({
  email: Yup.string().required('Please provide email.'),
  password: Yup.string().required('Please provide password.'),
});

const SigninForm = () => {
  const dispatch = useDispatch();

  const { isLoadingUsers } = useSelector((state) => state.users);
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

  const handleSocialLogin = async (user) => {
    try {
      const response = await dispatch(usersThunk.facebooklogin(user?._token?.accessToken)).unwrap();
      storage.setStorageJson(USER_LOGIN, response);
      storage.setStorageJson(ACCESS_TOKEN, response.accessToken);
      storage.setCookieJson(USER_LOGIN, response, 30);
      notifications.success('Sign in with Facebook successfully.');
      history.push('/index');
    } catch (err) {
      notifications.error('Failed to sign in with Facebook.');
    }
  };

  const handleSocialLoginFailure = (err) => {
    if (err) {
      notifications.error('Failed to sign in with Facebook.');
    }
  };

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
        <Space>
          <Button
            type='primary'
            htmlType='submit'
          >
            Sign In
          </Button>
          <SocialButton
            provider='facebook'
            appId='259894119932234'
            disabled={isLoadingUsers}
            type='primary'
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            <Space>
              Sign in with Facebook
              <Spin
                spinning={isLoadingUsers}
                style={{ color: '#fff' }}
              />
            </Space>
          </SocialButton>
        </Space>
      </form>
    </div>
  );
};

export default SigninForm;
