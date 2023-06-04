import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Col, Popconfirm, Radio, Row, Space, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import styles from './styles.module.scss';
import InputField from 'components/InputField';
import { usersThunk } from 'redux/thunks/usersThunk';

const UpdateSchema = Yup.object().shape({
  email: Yup.string().required('Please provide email.'),
  name: Yup.string().required('Please provide name.'),
  phone: Yup.string().required('Please provide phone.'),
});

const UserInfo = ({ userProfile, isLoading }) => {
  const dispatch = useDispatch();

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
    onSubmit: async (values) => {
      try {
        await dispatch(usersThunk.updateProfile(values)).unwrap();
        toast.success('Your profile was updated successfully.');
      } catch (err) {
        toast.error('Failed to update your profile.');
      }
    },
  });

  const handleChangeGender = (e) => {
    setFieldValue('gender', e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <img className={styles.cover} src={require('../../../../assets/images/banner_2.png')} alt='cover' />
        <img className={styles.avatar} src={userProfile?.avatar} alt='avatar' />
      </div>

      <form className={styles.form}>
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
              <Popconfirm
                placement='topLeft'
                title={'Are you sure to update your profile?'}
                icon={<FontAwesomeIcon icon={faCircleQuestion} style={{ color: 'var(--color-secondary)' }} />}
                okText='Update'
                cancelText='Cancel'
                onConfirm={handleSubmit}
              >
                <Button type='primary' block disabled={isLoading}>
                  <Space>
                    Update
                    <Spin spinning={isLoading} style={{ color: 'white' }} />
                  </Space>
                </Button>
              </Popconfirm>
              <Button type='primary' block>
                Change Password
              </Button>
            </Space>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default UserInfo;
