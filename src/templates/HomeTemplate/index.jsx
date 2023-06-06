import React, { useEffect, useRef } from 'react';
import { Outlet, useHref } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { productThunk } from 'redux/thunks/productThunk';

const HomeTemplate = () => {
  const categoryList = useSelector((state) => state.product.categoryList);
  const outletRef = useRef();
  const href = useHref();
  const dispatch = useDispatch();

  // the index page dont need a paddding-top
  useEffect(() => {
    if (href === '/' || href === '/index') {
      outletRef.current.style.paddingTop = 0;
    } else {
      outletRef.current.style.paddingTop = 'calc(var(--space-lg) + var(--padding-top-header))';
    }
  }, [href]);

  useEffect(() => {
    dispatch(productThunk.getAllProductList());
    dispatch(productThunk.getAllCategory());
    dispatch(productThunk.getProductByFeature(true));
  }, [dispatch]);

  useEffect(() => {
    categoryList?.forEach((item) => {
      dispatch(productThunk.getProductByCategory(item?.id));
    });
  }, [dispatch, categoryList]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div ref={outletRef}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
