import React from 'react';

import styles from './styles.module.scss';
import LordIcon from 'components/LordIcon';
import { Badge, Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderFavoriteMenu = () => {
  const favoriteList = useSelector((state) => state.users.favoriteList);

  return (
    <div className={styles.wrapper}>
      <Button type='link'>
        <Badge
          count={favoriteList?.length}
          overflowCount={99}
          style={{
            lineHeight: '26px',
            boxShadow: '0 0 0 1.5px #fff',
            color: 'var(--color-text-secondary )',
            backgroundColor: 'var(--color-secondary)',
          }}
        >
          <Link to='/profile'>
            <LordIcon
              className='lordIcon'
              icon='heart'
              trigger='hover'
            />
          </Link>
        </Badge>
      </Button>
    </div>
  );
};

export default HeaderFavoriteMenu;
