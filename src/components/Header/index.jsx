import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useHref } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './styles.module.scss';
import Container from 'components/Container';
import HeaderUserMenu from 'components/HeaderUserMenu';
import HeaderCartMenu from 'components/HeaderCartMenu';
import LordIcon from 'components/LordIcon';
import { HEART_ICON_CDN, SEARCH_ICON_CDN } from 'utils/constants/settingSystem';

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
        div.current.style.backgroundColor = 'var(--color-primary)';
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
      div.current.classList.add(styles.index);
    } else {
      div.current.style.backgroundColor = 'var(--color-primary)';
      div.current.classList.remove(styles.index);
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
            <NavLink
              to={item.path}
              className={(navLink) => (navLink.isActive ? styles.active : '')}
            >
              {item.name}
            </NavLink>
          </li>
        );
      });
    }
  };

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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                id='Nike'
                width={80}
                height={80}
              >
                <path
                  fill='var(--color-secondary)'
                  fillRule='evenodd'
                  d='m7.998 7.567-2.758.722c-.974.241-1.826.562-2.647.281-1.116-.482-1.096-1.736-.264-3.07-1.471 1.214-4.118 5.096-.538 5.488.456.06 1.268-.1 2.15-.471l4.057-1.665L16 5.58 8.992 7.306l-.994.261z'
                  clipRule='evenodd'
                  className='color1d1d1b svgShape'
                ></path>
              </svg>
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
                <LordIcon
                  className={styles.lordIcon}
                  src={SEARCH_ICON_CDN}
                  trigger='hover'
                />
              </div>
              <div className={styles.icon}>
                <HeaderUserMenu />
              </div>
              <div className={styles.icon}>
                <LordIcon
                  className={styles.lordIcon}
                  src={HEART_ICON_CDN}
                  trigger='hover'
                />
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
