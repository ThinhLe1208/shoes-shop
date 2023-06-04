import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Col, Radio, Row, Space } from 'antd';

import styles from './styles.module.scss';
import { usersThunk } from 'redux/thunks/usersThunk';
import { storage } from 'utils/storage';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import InputField from 'components/InputField';

const UpdateSchema = Yup.object().shape({
  email: Yup.string().required('Please provide email.'),
  name: Yup.string().required('Please provide name.'),
  phone: Yup.string().required('Please provide phone.'),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.users.userProfile);
  console.log('Profile ~ userProfile:', userProfile);

  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Profile' }];

  useEffect(() => {
    dispatch(usersThunk.getProfile());
  }, [dispatch]);

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userProfile?.email,
      password: userProfile?.password,
      name: userProfile?.name,
      gender: userProfile?.gender,
      phone: userProfile?.phone,
    },
    validationSchema: UpdateSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(usersThunk.updateProfile(values));
    },
  });

  const handleChangeGender = (e) => {
    setFieldValue('gender', e.target.value);
  };

  return (
    storage.checkLogin() && (
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumb breadCrumbList={breadCrumbList} />

          <div className={styles.heading}>
            <img className={styles.cover} src={require('../../assets/images/banner_2.png')} alt='cover' />
            <img className={styles.avatar} src={userProfile?.avatar} alt='avatar' />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Row gutter={[36, 36]}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
                <label className={styles.label}>Gender</label>
                <Radio.Group onChange={handleChangeGender} value={values.gender}>
                  <Radio value={true}>Male</Radio>
                  <Radio value={false}>Female</Radio>
                </Radio.Group>
              </Col>
              <Col span={12}>
                <Space>
                  <Button type='primary' htmlType='submit' block>
                    Update
                  </Button>
                  <Button type='primary' block>
                    Change Password
                  </Button>
                </Space>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    )
  );
};

export default Profile;
