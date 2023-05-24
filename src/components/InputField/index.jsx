import React from 'react';
import { Input } from 'antd';

import styles from './styles.module.scss';
import ErrorMessage from 'components/ErrorMessage';

const InputField = ({
  label,
  name,
  value,
  error,
  touched,
  placeholder = '',
  type = 'text',
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Input
        className={styles.input}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        status={error && touched ? 'error' : ''}
        style={{ width: '100%' }}
        {...rest}
      />
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default InputField;
