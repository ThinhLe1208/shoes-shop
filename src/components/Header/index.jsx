import React from 'react';

import styles from './styles.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to='/'>
            <img
              src='https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group_1863_246x.png?v=1650346870'
              alt='logo'
            />
          </Link>
        </div>
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
              <NavLink to='carts'>Carts</NavLink>
            </li>
            <li>
              <NavLink to='profile'>Profile</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
