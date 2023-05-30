import React, { useLayoutEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import Container from 'components/Container';
import HeaderUserMenu from 'components/HeaderUserMenu';
import HeaderCartMenu from 'components/HeaderCartMenu';

const Header = () => {
  const div = useRef();

  useLayoutEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY >= 40) {
        div.current.classList.add(styles.fixed);
      } else {
        div.current.classList.remove(styles.fixed);
      }
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      ref={div}
    >
      <Container>
        <Row
          justify={'space-between'}
          align={'middle'}
        >
          <Col>
            <Link to='/'>
              <img
                src='https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group_1863_246x.png?v=1650346870'
                alt='logo'
              />
            </Link>
          </Col>

          <Col>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink to='index'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='detail/1'>Detail</NavLink>
                </li>
                <li>
                  <NavLink to='login'>Login</NavLink>
                </li>
                <li>
                  <NavLink to='register'>Register</NavLink>
                </li>
                <li>
                  <NavLink to='cart'>Cart</NavLink>
                </li>
                <li>
                  <NavLink to='profile'>Profile</NavLink>
                </li>
              </ul>
            </nav>
          </Col>

          <Col>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <SearchOutlined />
              </div>
              <div className={styles.icon}>
                <HeaderUserMenu />
              </div>
              <div className={styles.icon}>
                <HeartOutlined />
              </div>
              <div className={styles.icon}>
                <HeaderCartMenu />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
