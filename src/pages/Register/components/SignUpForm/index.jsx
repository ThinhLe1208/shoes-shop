import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './styles.module.scss';
import InputField from 'components/InputField';
import { Button, Divider, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { usersThunk } from 'redux/thunks/usersThunk';
import { history } from 'utils/history';
import { notifications } from 'utils/notifications';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().required('Please provide email.'),
  password: Yup.string().required('Please provide password.'),
  name: Yup.string().required('Please provide name.'),
  phone: Yup.string().required('Please provide phone.'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: true,
      phone: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(usersThunk.signUp(values)).unwrap();
        notifications.success('Sign up successfully.');
        history.push('/login');
      } catch (err) {
        notifications.error('Failed to sign up.');
      }
    },
  });

  const handleChangeGender = (e) => {
    setFieldValue('gender', e.target.value);
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
        <InputField
          label='Name'
          name='name'
          value={values.name}
          error={errors.name}
          touched={touched.name}
          placeholder='Insert name'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Divider />
        <InputField
          label='Phone'
          name='phone'
          value={values.phone}
          error={errors.phone}
          touched={touched.phone}
          placeholder='Insert phone'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Divider />
        <label className={styles.label}>Gender</label>
        <Radio.Group
          onChange={handleChangeGender}
          value={values.gender}
        >
          <Radio value={true}>Male</Radio>
          <Radio value={false}>Female</Radio>
        </Radio.Group>
        <Divider />
        <Button
          type='primary'
          htmlType='submit'
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
