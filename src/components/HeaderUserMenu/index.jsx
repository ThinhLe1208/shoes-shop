import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { storage } from 'utils/storage';
import { ACCESS_TOKEN, USER_LOGIN } from 'utils/constants/settingSystem';

const HeaderUserMenu = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const notLoggedInContent = (
    <ul
      className={styles.userMenu}
      onClick={hide}
    >
      <li className={styles.userItem}>
        <Link to='/login'>
          <Space align='baseline'>
            <FontAwesomeIcon icon={faLock} />
            <p>Log In</p>
          </Space>
        </Link>
      </li>
      <li className={styles.userItem}>
        <Link to='/register'>
          <Space align='baseline'>
            <FontAwesomeIcon icon={faUser} />
            <p>Create Account</p>
          </Space>
        </Link>
      </li>
    </ul>
  );

  const loggedInContent = (
    <ul
      className={styles.userMenu}
      onClick={hide}
    >
      <li className={styles.userItem}>
        <Link to='/profile'>
          <Space align='baseline'>
            <FontAwesomeIcon icon={faLock} />
            <p>My Account</p>
          </Space>
        </Link>
      </li>
      <li className={styles.userItem}>
        <Link
          to='/index'
          onClick={() => {
            storage.clearStorage(USER_LOGIN);
            storage.clearStorage(ACCESS_TOKEN);
            storage.eraseCookie(USER_LOGIN);
          }}
        >
          <Space align='baseline'>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p>Log out</p>
          </Space>
        </Link>
      </li>
    </ul>
  );

  return (
    <div className={styles.wrapper}>
      <Popover
        content={storage.getStore(USER_LOGIN) && storage.getStore(ACCESS_TOKEN) ? loggedInContent : notLoggedInContent}
        trigger='click'
        placement='bottomRight'
        arrow={false}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <UserOutlined />
      </Popover>
    </div>
  );
};

export default HeaderUserMenu;
