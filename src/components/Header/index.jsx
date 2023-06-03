import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useHref } from 'react-router-dom';
import { Col, Row } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import Container from 'components/Container';
import HeaderUserMenu from 'components/HeaderUserMenu';
import HeaderCartMenu from 'components/HeaderCartMenu';

const Header = () => {
  const div = useRef();
  const href = useHref();

  const navLinks = [
    { id: 1, name: 'Home', path: 'index' },
    { id: 1, name: 'Detail', path: 'detail/12' },
    { id: 1, name: 'Login', path: 'login' },
    { id: 1, name: 'Register', path: 'register' },
    { id: 1, name: 'Cart', path: 'cart' },
    { id: 1, name: 'Profile', path: 'profile' },
    { id: 1, name: 'Search', path: 'search' },
  ];

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY >= 40) {
        div.current.style.backgroundColor = 'var(--bg-color)';
        div.current.classList.add(styles.fixed);
      } else {
        if (href === '/index' || href === '/') {
          div.current.style.backgroundColor = 'transparent';
        }
        div.current.classList.remove(styles.fixed);
      }
    };

    if (href === '/index' || href === '/') {
      div.current.style.backgroundColor = 'transparent';
    } else {
      div.current.style.backgroundColor = 'var(--bg-color)';
    }

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [href]);

  const renderNavLinkList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <li key={index}>
            <NavLink to={item.path} className={(navLink) => (navLink.isActive ? styles.active : '')}>
              {item.name}
            </NavLink>
          </li>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper} ref={div}>
      <Container>
        <Row justify={'space-between'} align={'middle'}>
          <Col>
            <Link to='/'>
              <img className={styles.logo} src={require('../../assets/images/logo_nike.png')} alt='logo' />
            </Link>
          </Col>

          <Col>
            <nav className={styles.nav}>
              <ul>{renderNavLinkList(navLinks)}</ul>
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
