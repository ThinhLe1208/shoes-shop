import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useHref } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import Header from 'components/Header';
import { productThunk } from 'redux/thunks/productThunk';
import { setScreenWidth } from 'redux/slices/uiSlice';
import HeaderIndex from 'components/HeaderIndex';
import Footer from 'components/Footer';

const HomeTemplate = () => {
  const outletRef = useRef();
  const href = useHref();
  const dispatch = useDispatch();
  const [isIndexPage, setIsIndexPage] = useState(true);

  // get a current screenwidth to make website responsive with the ant library
  useEffect(() => {
    const handleSetScreenWidth = () => {
      dispatch(setScreenWidth(window.innerWidth));
    };

    window.addEventListener('load', handleSetScreenWidth);
    window.addEventListener('resize', handleSetScreenWidth);

    return () => {
      window.removeEventListener('load', handleSetScreenWidth);
      window.removeEventListener('resize', handleSetScreenWidth);
    };
  }, [dispatch]);

  // the index page dont need a paddding-top
  useEffect(() => {
    if (href === '/' || href === '/index') {
      outletRef.current.style.paddingTop = 0;
      setIsIndexPage(true);
    } else {
      outletRef.current.style.paddingTop = 'calc(var(--space-lg) + var(--padding-top-header))';
      setIsIndexPage(false);
    }
  }, [href]);

  useEffect(() => {
    dispatch(productThunk.getAllProductList());
    dispatch(productThunk.getAllCategory());
    dispatch(productThunk.getProductByFeature(true));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {isIndexPage && <HeaderIndex className={styles.header} />}
      {!isIndexPage && <Header className={styles.header} />}

      <div
        ref={outletRef}
        className={styles.outlet}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
