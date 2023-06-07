import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import styles from './styles.module.scss';

const Banner = ({
  className,
  position = 'middle',
  image,
  subTitle,
  title,
  content,
  buttonContent,
  buttonType = 'primary',
  path,
  height = '300px',
}) => {
  const positionStyle = useMemo(() => {
    switch (position) {
      case 'right':
        return {
          inset: '0 5% 0 auto',
          justifyContent: 'center',
        };
      case 'left':
        return {
          inset: '0 auto 0 5%',
          paddingTop: '40px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        };
      default:
        return {
          width: '100%',
          top: '0',
          left: '50%',
          paddingTop: '40px',
          transform: 'translateX(-50%)',
          justifyContent: 'flex-start',
        };
    }
  }, [position]);

  return (
    <div
      className={styles.wrapper + ' ' + className}
      style={{ height: height }}
    >
      <Link to={path}>
        <img
          className={styles.image}
          src={require(`../../assets/images/${image}`)}
          alt={image}
        />
        <div
          className={styles.content}
          style={positionStyle}
        >
          {subTitle && <h3>{subTitle}</h3>}
          {title && <h2>{title}</h2>}
          {content && <p>{content}</p>}
          {buttonContent && <Button type={buttonType}>{buttonContent}</Button>}
        </div>
      </Link>
    </div>
  );
};

export default Banner;
