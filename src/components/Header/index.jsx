import React from 'react';

import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <NavLink to='index'>Home</NavLink>
      <NavLink to='detail/1'>Detail</NavLink>
      <NavLink to='login'>Login</NavLink>
      <NavLink to='register'>Register</NavLink>
      <NavLink to='carts'>Carts</NavLink>
      <NavLink to='profile'>Profile</NavLink>
    </div>
  );
}
